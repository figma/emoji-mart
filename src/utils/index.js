import buildSearch from './build-search'
import data from '../emoji'

const COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/
const SKINS = [
  '1F3FA', '1F3FB', '1F3FC',
  '1F3FD', '1F3FE', '1F3FF',
]

function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map((u) => `0x${u}`)

  return String.fromCodePoint(...codePoints)
}

function sanitize(emoji) {
  var { name, short_names, skin_tone, skin_variations, unified, imageUrl } = emoji,
      id = emoji.id || short_names[0],
      colons = `:${id}:`

  if (skin_tone) {
    colons += `:skin-tone-${skin_tone}:`
  }

  return {
    id,
    name,
    colons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
  }
}

function getSanitizedData() {
  return sanitize(getData(...arguments))
}

function getData(emoji, skin) {
  var emojiData = {}

  if (typeof emoji == 'string') {
    let matches = emoji.match(COLONS_REGEX)

    if (matches) {
      emoji = matches[1]

      if (matches[2]) {
        skin = parseInt(matches[2])
      }
    }

    if (data.emojis.hasOwnProperty(emoji)) {
      emojiData = data.emojis[emoji]
    }
  } else if (emoji.name) {
    if (data.emojis.hasOwnProperty(emoji.name)) {
      emojiData = data.emojis[emoji.name]
      skin || (skin = emoji.skin)
    }
  }

  if (emojiData.skin_variations && skin > 1) {
    emojiData = JSON.parse(JSON.stringify(emojiData))
    var skinKey = SKINS[skin - 1],
        variationData = emojiData.skin_variations[skinKey]
    if (!variationData.variations && emojiData.variations) {
      delete emojiData.variations
    }
    emojiData.skin_tone = skin
    for (let k in variationData) {
      let v = variationData[k]
      emojiData[k] = v
    }
  }

  emojiData.id = emojiData.name
  return emojiData
}

function intersect(a, b) {
  var aSet = new Set(a),
      bSet = new Set(b),
      intersection = null

  intersection = new Set(
    [...aSet].filter(x => bSet.has(x))
  )

  return Array.from(intersection)
}

function deepMerge(a, b) {
  var o = {}

  for (let key in a) {
    let originalValue = a[key],
        value = originalValue

    if (b.hasOwnProperty(key)) {
      value = b[key]
    }

    if (typeof value === 'object') {
      value = deepMerge(originalValue, value)
    }

    o[key] = value
  }

  return o
}

export { getData, getSanitizedData, intersect, deepMerge, unifiedToNative }
