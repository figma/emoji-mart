import '../vendor/raf-polyfill'

import React from 'react'
import PropTypes from 'prop-types'
import measureScrollbar from 'measure-scrollbar'

import data from '../emoji'

import store from '../utils/store'
import frequently from '../utils/frequently'
import { deepMerge } from '../utils'

import { Anchors, Category, Emoji, Preview, Search } from '.'

const RECENT_CATEGORY = { name: 'Recent', emojis: null }
const SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: false }

const I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    people: 'Smileys & People',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
  },
}

export default class Picker extends React.Component {
  constructor(props) {
    super(props)

    this.i18n = deepMerge(I18N, props.i18n)
    this.state = {
      skin: store.get('skin') || props.skin,
      firstRender: true,
    }

    this.categories = []
    let allCategories = [].concat(data.categories)

    this.hideRecent = true

    for (let category of allCategories) {
      let isIncluded = props.include && props.include.length ? props.include.indexOf(category.name.toLowerCase()) > -1 : true
      let isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category.name.toLowerCase()) > -1 : false
      if (!isIncluded || isExcluded) { continue }

      if (props.emojisToShowFilter) {
        let newEmojis = []

        for (let emoji of category.emojis) {
          if (props.emojisToShowFilter(data.emojis[emoji] || emoji)) {
            newEmojis.push(emoji)
          }
        }

        if (newEmojis.length) {
          let newCategory = {
            emojis: newEmojis,
            name: category.name,
          }

          this.categories.push(newCategory)
        }
      } else {
        this.categories.push(category)
      }
    }

    let includeRecent = props.include && props.include.length ? props.include.indexOf('recent') > -1 : true
    let excludeRecent = props.exclude && props.exclude.length ? props.exclude.indexOf('recent') > -1 : false
    if (includeRecent && !excludeRecent) {
      this.hideRecent = false
      this.categories.unshift(RECENT_CATEGORY)
    }

    if (this.categories[0]) {
      this.categories[0].first = true
    }

    this.categories.unshift(SEARCH_CATEGORY)
  }

  componentWillReceiveProps(props) {
    if (props.skin && !store.get('skin')) {
      this.setState({ skin: props.skin })
    }
  }

  componentDidMount() {
    if (this.state.firstRender) {
      this.testStickyPosition()
      this.firstRenderTimeout = setTimeout(() => {
        this.setState({ firstRender: false })
      }, 60)
    }
  }

  componentDidUpdate() {
    this.updateCategoriesSize()
    this.handleScroll()
  }

  componentWillUnmount() {
    SEARCH_CATEGORY.emojis = null

    clearTimeout(this.leaveTimeout)
    clearTimeout(this.firstRenderTimeout)
  }

  testStickyPosition() {
    var stickyTestElement = document.createElement('div')
    for (let prefix of ['', '-webkit-', '-ms-', '-moz-', '-o-']) {
      stickyTestElement.style.position = `${prefix}sticky`
    }

    this.hasStickyPosition = !!stickyTestElement.style.position.length
  }

  handleEmojiOver(emoji) {
    // Use Array.prototype.find() when it is more widely supported.
    this.preview.setState({ emoji: emoji })
    clearTimeout(this.leaveTimeout)
  }

  handleEmojiLeave(emoji) {
    this.leaveTimeout = setTimeout(() => {
      this.preview.setState({ emoji: null })
    }, 16)
  }

  handleEmojiClick(emoji, e) {
    this.props.onClick(emoji, e)
    if (!this.hideRecent) frequently.add(emoji)

    var component = this.categories[1]
    if (component) {
      let maxMargin = component.maxMargin
      component.forceUpdate()

      window.requestAnimationFrame(() => {
        component.memoizeSize()
        if (maxMargin == component.maxMargin) return

        this.updateCategoriesSize()
        this.handleScrollPaint()

        if (SEARCH_CATEGORY.emojis) {
          component.updateDisplay('none')
        }
      })
    }
  }

  handleScroll() {
    if (!this.waitingForPaint) {
      this.waitingForPaint = true
      window.requestAnimationFrame(this.handleScrollPaint.bind(this))
    }
  }

  handleScrollPaint() {
    this.waitingForPaint = false

    if (!this.scroll) {
      return
    }

    let activeCategory = null

    if (SEARCH_CATEGORY.emojis) {
      activeCategory = SEARCH_CATEGORY
    } else {
      var target = this.scroll,
          scrollTop = target.scrollTop,
          scrollingDown = scrollTop > (this.scrollTop || 0),
          minTop = 0

      for (let i = 0, l = this.categories.length; i < l; i++) {
        let ii = scrollingDown ? (this.categories.length - 1 - i) : i,
            category = this.categories[ii],
            component = this.categories[ii]

        if (component) {
          let active = component.handleScroll(scrollTop)

          if (!minTop || component.top < minTop) {
            if (component.top > 0) {
              minTop = component.top
            }
          }

          if (active && !activeCategory) {
            activeCategory = category
          }
        }
      }

      if (scrollTop < minTop) {
        for (let category of this.categories) {
          if (category.anchor === false) { continue }

          activeCategory = category
          break
        }
      } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
        activeCategory = this.categories[this.categories.length - 1]
      }
    }

    if (activeCategory) {
      let { name: categoryName } = activeCategory

      if (this.anchors.state.selected != categoryName) {
        this.anchors.setState({ selected: categoryName })
      }
    }

    this.scrollTop = scrollTop
  }

  handleSearch(emojis) {
    SEARCH_CATEGORY.emojis = emojis

    for (let i = 0, l = this.categories.length; i < l; i++) {
      let component = this.categories[i]

      if (component && component.props.name != 'Search') {
        let display = emojis ? 'none' : 'inherit'
        component.updateDisplay(display)
      }
    }

    this.forceUpdate()
    this.scroll.scrollTop = 0
    this.handleScroll()
  }

  handleAnchorClick(category, i) {
    var component = this.categories[i],
        scrollToComponent = null

    scrollToComponent = () => {
      if (component) {
        let { top } = component

        if (category.first) {
          top = 0
        } else {
          top += 1
        }

        this.scroll.scrollTop = top
      }
    }

    if (SEARCH_CATEGORY.emojis) {
      this.handleSearch(null)
      this.search.clear()

      window.requestAnimationFrame(scrollToComponent)
    } else {
      scrollToComponent()
    }
  }

  handleSkinChange(skin) {
    var newState = { skin: skin }

    this.setState(newState)
    store.update(newState)
  }

  updateCategoriesSize() {
    for (let i = 0, l = this.categories.length; i < l; i++) {
      let component = this.categories[i]
      if (component) component.memoizeSize()
    }

    if (this.scroll) {
      let target = this.scroll
      this.scrollHeight = target.scrollHeight
      this.clientHeight = target.clientHeight
    }
  }

  getCategories() {
    return this.state.firstRender ? this.categories.slice(0, 3) : this.categories
  }

  render() {
    var { perLine, emojiSize, style, title, emoji, color, emojisToShowFilter, include, exclude, autoFocus } = this.props,
        { skin } = this.state,
        width = (perLine * (emojiSize + 12)) + 12 + 2 + measureScrollbar()

    return <div style={{width: width, ...style}} className='emoji-mart'>
      <div className='emoji-mart-bar'>
        <Anchors
          ref={anchors => this.anchors = anchors}
          i18n={this.i18n}
          color={color}
          categories={this.categories}
          onAnchorClick={this.handleAnchorClick.bind(this)}
        />
      </div>

      <Search
        ref={search => this.search = search}
        onSearch={this.handleSearch.bind(this)}
        i18n={this.i18n}
        emojisToShowFilter={emojisToShowFilter}
        include={include}
        exclude={exclude}
        autoFocus={autoFocus}
      />

      <div ref={scroll => this.scroll = scroll} className='emoji-mart-scroll' onScroll={this.handleScroll.bind(this)}>
        {this.getCategories().map((category, i) => {
          return <Category
            ref={category => {
              if (this.categories) {
                this.categories.push(category)
              } else {
                this.categories = [category]
              }
            }}
            key={category.name}
            name={category.name}
            emojis={category.emojis}
            perLine={perLine}
            hasStickyPosition={this.hasStickyPosition}
            i18n={this.i18n}
            emojiProps={{
              skin: skin,
              size: emojiSize,
              onOver: this.handleEmojiOver.bind(this),
              onLeave: this.handleEmojiLeave.bind(this),
              onClick: this.handleEmojiClick.bind(this),
            }}
          />
        })}
      </div>

      <div className='emoji-mart-bar'>
        <Preview
          ref={preview => this.preview = preview}
          title={title}
          emoji={emoji}
          emojiProps={{
            size: 38,
            skin: skin,
          }}
          skinsProps={{
            skin: skin,
            onChange: this.handleSkinChange.bind(this)
          }}
        />
      </div>
    </div>
  }
}

Picker.propTypes = {
  onClick: PropTypes.func,
  perLine: PropTypes.number,
  emojiSize: PropTypes.number,
  i18n: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.string,
  emoji: PropTypes.string,
  color: PropTypes.string,
  skin: Emoji.propTypes.skin,
  emojisToShowFilter: PropTypes.func,
  include: PropTypes.arrayOf(PropTypes.string),
  exclude: PropTypes.arrayOf(PropTypes.string),
  autoFocus: PropTypes.bool,
}

Picker.defaultProps = {
  onClick: (() => {}),
  emojiSize: 24,
  perLine: 9,
  i18n: {},
  style: {},
  title: 'Emoji Mart™',
  emoji: 'department_store',
  color: '#ae65c5',
  skin: Emoji.defaultProps.skin,
  emojisToShowFilter: null,
  autoFocus: false,
}
