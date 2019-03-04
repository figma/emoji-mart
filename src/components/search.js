import React from 'react'
import PropTypes from 'prop-types'
import emojiIndex from '../utils/emoji-index'

export default class Search extends React.Component {
  handleChange() {
    this.props.onSearch(emojiIndex.search(this.input.value, {
      emojisToShowFilter: this.props.emojisToShowFilter,
      maxResults: this.props.maxResults,
      include: this.props.include,
      exclude: this.props.exclude,
    }))
  }

  clear() {
    this.input.value = ''
  }

  render() {
    var { i18n, autoFocus } = this.props

    return <div className='emoji-mart-search'>
      <input
        ref={input => this.input = input}
        type='text'
        onChange={this.handleChange.bind(this)}
        placeholder={i18n.search}
        autoFocus={autoFocus}
      />
    </div>
  }
}

Search.propTypes = {
  onSearch: PropTypes.func,
  maxResults: PropTypes.number,
  emojisToShowFilter: PropTypes.func,
  autoFocus: PropTypes.bool,
}

Search.defaultProps = {
  onSearch: (() => {}),
  maxResults: 75,
  emojisToShowFilter: null,
  autoFocus: false,
}
