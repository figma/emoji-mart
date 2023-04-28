const VERSIONS = [
  { v: 14, emoji: '🫠' },
  { v: 13.1, emoji: '😶‍🌫️' },
  { v: 13, emoji: '🥸' },
  { v: 12.1, emoji: '🧑‍🦰' },
  { v: 12, emoji: '🥱' },
  { v: 11, emoji: '🥰' },
  { v: 5, emoji: '🤩' },
  { v: 4, emoji: '👱‍♀️' },
  { v: 3, emoji: '🤣' },
  { v: 2, emoji: '👋🏻' },
  { v: 1, emoji: '🙃' },
]

function latestVersion() {
  for (const { v, emoji } of VERSIONS) {
    if (testEmoji(emoji)) {
      return v
    }
  }
}

function noCountryFlags() {
  if (testEmoji('🇨🇦')) {
    return false
  }

  return true
}

function testEmoji(emoji) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 25

  const ctx = canvas.getContext('2d')
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  ctx.font = `50px "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"`
  ctx.fillStyle = '#0f0'
  ctx.fillText(emoji, 0, 0)

  const rgba = ctx.getImageData(0, 0, 1, 1).data.join(',')

  if (rgba != '0,0,0,0') {
    return true
  }
}

function unifiedToNative(unified) {
  let unicodes = unified.split('-')
  let codePoints = unicodes.map((u) => `0x${u}`)

  return String.fromCodePoint(...codePoints)
}

export default { latestVersion, noCountryFlags, unifiedToNative }
