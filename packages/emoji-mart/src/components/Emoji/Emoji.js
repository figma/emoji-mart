import { SearchIndex } from '../../helpers'

export default function Emoji(props) {
  let { id, skin, shortcodes, emoji } = props

  if (!emoji && !id && shortcodes) {
    const matches = shortcodes.match(SearchIndex.SHORTCODES_REGEX)
    if (matches) {
      id = matches[1]

      if (matches[2]) {
        skin = matches[2]
      }
    }
  }

  emoji || (emoji = SearchIndex.get(id))
  if (!emoji) return props.fallback

  const emojiSkin = emoji.skins[skin - 1] || emoji.skins[0]
  const src =
    'https://static.figma.com/emoji/3/64/' +
    emojiSkin.unified?.toLowerCase() +
    '.png'

  return (
    <img
      style={{
        height: props.size || '1em',
        width: 'auto',
        display: 'inline-block',
        position: 'relative',
      }}
      alt={/* emojiSkin.native || */ emojiSkin.shortcodes}
      src={src}
    />
  )
}
