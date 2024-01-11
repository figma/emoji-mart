import { SearchIndex, Images, NativeSupport } from '../../helpers'

export default function Emoji(props) {
  let { id, skin, shortcodes, emoji, set, size } = props

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
  if (!emoji || emoji.id === 'female_sign' || emoji.id === 'male_sign')
    return props.fallback

  const emojiSkin = emoji.skins[skin - 1] || emoji.skins[0]

  if (set === 'native') {
    const native = NativeSupport.unifiedToNative(emojiSkin.unified)
    return (
      <span
        style={{
          fontSize: size || 22,
          fontFamily:
            'EmojiMart, Segoe UI Emoji, Segoe UI Symbol, Segoe UI, Apple Color Emoji, Twemoji Mozilla, Noto Color Emoji, Android Emoji',
        }}
      >
        {native}
      </span>
    )
  }

  // TODO: Before enabling `emoji_15_upgrade`, we will need to update this to respect the new
  // URL format for emoji images in Figma Design and Figjam (which will likely be using Noto).

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
