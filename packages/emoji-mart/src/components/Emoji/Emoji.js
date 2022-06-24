import { SearchIndex, Images } from '../../helpers'

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
  if (!emoji || emoji.id === 'female_sign' || emoji.id === 'male_sign') return props.fallback

  const emojiSkin = emoji.skins[skin - 1] || emoji.skins[0]
  const src = Images.getUrl(emojiSkin)

  return (
    <img
      style={{
        height: props.size || '1em',
        width: 'auto',
        display: 'inline-block',
        position: 'relative',
      }}
      alt={emojiSkin.native}
      src={src}
    />
  )
}
