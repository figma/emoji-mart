import React from 'react'
import PropTypes from 'prop-types'

import { getData, getSanitizedData } from '../utils'

const _getData = (props) => {
  var { emoji, skin } = props
  return getData(emoji, skin)
}

const _getSanitizedData = (props) => {
  var { emoji, skin } = props
  return getSanitizedData(emoji, skin)
}

const _handleClick = (e, props) => {
  if (!props.onClick) { return }
  var { onClick } = props,
      emoji = _getSanitizedData(props)

  onClick(emoji, e)
}

const _handleOver = (e, props) => {
  if (!props.onOver) { return }
  var { onOver } = props,
      emoji = _getSanitizedData(props)

  onOver(emoji, e)
}

const _handleLeave = (e, props) => {
  if (!props.onLeave) { return }
  var { onLeave } = props,
      emoji = _getSanitizedData(props)

  onLeave(emoji, e)
}

const Emoji = (props) => {
  for (let k in Emoji.defaultProps) {
    if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
      props[k] = Emoji.defaultProps[k]
    }
  }

  var { unified, imageUrl } = _getData(props),
      style = {},
      children = props.children

  const image = "url(https://static.figma.com/emoji/2/64/" + unified.toLowerCase() + ".png)"
  style = {
    width: props.size,
    height: props.size,
    display: 'inline-block',
    backgroundImage: image,
    backgroundSize: "100%",
    backgroundPosition: "100% 100%",
  }

  return <span
    key={props.emoji.id || props.emoji}
    onClick={(e) => _handleClick(e, props)}
    onMouseEnter={(e) => _handleOver(e, props)}
    onMouseLeave={(e) => _handleLeave(e, props)}
    className='emoji-mart-emoji'>
    <span style={style} />
  </span>
}

Emoji.propTypes = {
  onOver: PropTypes.func,
  onLeave: PropTypes.func,
  onClick: PropTypes.func,
  skin: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  size: PropTypes.number.isRequired,
  emoji: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
}

Emoji.defaultProps = {
  skin: 1,
  onOver: (() => {}),
  onLeave: (() => {}),
  onClick: (() => {}),
}

export default Emoji
