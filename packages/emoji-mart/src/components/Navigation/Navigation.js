import { PureComponent } from 'preact/compat'
import { Data, I18n } from '../../config'
import Icons from '../../icons'
import { createRef } from 'preact'

export default class Mavigation extends PureComponent {
  constructor() {
    super()

    this.categories = Data.categories.filter((category) => {
      return !category.target
    })

    this.state = {
      categoryIndex: 0,
    }

    this.tabRefs = this.categories.map((_) => createRef())
  }

  renderIcon(category) {
    const { icon } = category

    if (icon) {
      if (icon.svg) {
        return (
          <span
            class="flex"
            dangerouslySetInnerHTML={{ __html: icon.svg }}
          ></span>
        )
      }

      if (icon.src) {
        return <img src={icon.src} />
      }
    }

    return Icons.categories[category.id]
  }

  setCategoryIndex = (index) => {
    this.props.onCategoryChange({ category: this.categories[index], i: index })
    this.setState({ categoryIndex: index })
    this.tabRefs[index].current?.focus()
  }

  handleKeyDown = (e) => {
    var newCategoryIndex = null
    switch (e.key) {
      case 'ArrowLeft':
        e.stopImmediatePropagation()
        e.preventDefault()
        if (this.state.categoryIndex > 0) {
          newCategoryIndex = this.state.categoryIndex - 1
          this.setCategoryIndex(newCategoryIndex)
        }
        break
      case 'ArrowRight':
        e.stopImmediatePropagation()
        e.preventDefault()
        if (this.state.categoryIndex < this.categories.length - 1) {
          newCategoryIndex = this.state.categoryIndex + 1

          this.setCategoryIndex(newCategoryIndex)
        }
        break
      default:
        break
    }
  }

  render() {
    return (
      <nav id="nav" class="padding" data-position={this.props.position}>
        <div
          class="flex relative"
          role="tablist"
          onKeyDown={this.handleKeyDown}
        >
          {this.categories.map((category, i) => {
            const title = category.name || I18n.categories[category.id]
            const selected =
              !this.props.showTabBar && i == this.state.categoryIndex

            return (
              <button
                aria-label={title}
                aria-selected={selected || undefined}
                title={title}
                type="button"
                class="flex flex-grow flex-center"
                onClick={() => {
                  this.setCategoryIndex(i)
                }}
                // This adds a roving index for the tabs, so that users always focus back onto the same tab
                tabIndex={this.state.categoryIndex === i ? 0 : -1}
                role="tab"
                ref={this.tabRefs[i]}
              >
                {this.renderIcon(category)}
              </button>
            )
          })}

          <div
            class="bar"
            style={{
              width: `${100 / this.categories.length}%`,
              opacity: this.props.showTabBar ? 0 : 1,
              transform: `translateX(${this.state.categoryIndex * 100}%)`,
            }}
          ></div>
        </div>
      </nav>
    )
  }
}
