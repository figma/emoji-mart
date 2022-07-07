import i18n_en from '../../emoji-mart-data/i18n/en.json'
import data_default from '../../emoji-mart-data/sets/4/apple.json'
import { FrequentlyUsed } from './helpers'

function unifiedToNative(unified) {
  let unicodes = unified.split('-')
  let codePoints = unicodes.map((u) => `0x${u}`)

  return String.fromCodePoint(...codePoints)
}

// Transformed minimized emoji-data into the form that the library expects
// When we decide to load this data asynchronous, we'll want to move this logic into packages/emoji-mart-data/build.js
function getProcessedData(data) {
  Object.keys(data.emojis).forEach((id) => {
    const emoji = {}
    emoji.id = id
    emoji.name = id
    emoji.search =
      `,` +
      /* TODO: once we load in the emoji data asynchronously, we can add back keyword support.
       * we do this because we want to reduce the bundle size for initial page load.
       **/
      [
        ...new Set(
          [
            emoji.id,
            ...emoji.name.split(/[-|_|\s]+/),
            // [emoji.keywords, false],
          ]
            .map((string) => {
              if (!string) return ''
              return string.toLowerCase()
            })
            .filter((a) => a && a.trim()),
        ),
      ].join(',')

    emoji.skins = data.emojis[id]
    emoji.skins.forEach((skin, index) => {
      if (skin) {
        const skinShortcodes = index + 1 == 1 ? '' : `:skin-tone-${index + 1}:`
        skin.shortcodes = `:${emoji.id}:${skinShortcodes}`
        skin.native = unifiedToNative(skin.unified)
      }
    })
    data.emojis[id] = emoji
  })
  data.natives = {}
  return data
}

export let I18n = i18n_en
export let Data = getProcessedData(data_default)

const DEFAULT_PROPS = {
  autoFocus: {
    value: false,
  },
  emojiButtonColors: {
    value: null,
  },
  emojiButtonRadius: {
    value: '100%',
  },
  emojiButtonSize: {
    value: 34,
  },
  emojiSize: {
    value: 22,
  },
  emojiVersion: {
    value: 14,
    choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14],
  },
  locale: {
    value: 'en',
    choices: ['en', 'fr'],
  },
  maxFrequentRows: {
    value: 4,
  },
  navPosition: {
    value: 'top',
    choices: ['top', 'bottom', 'none'],
  },
  noCountryFlags: {
    value: false,
  },
  noResultsEmoji: {
    value: null,
  },
  perLine: {
    value: 9,
  },
  previewEmoji: {
    value: null,
  },
  previewPosition: {
    value: 'bottom',
    choices: ['top', 'bottom', 'none'],
  },
  set: {
    value: 'native',
    choices: ['native', 'apple', 'facebook', 'google', 'twitter'],
  },
  skin: {
    value: 1,
    choices: [1, 2, 3, 4, 5, 6],
  },
  stickySearch: {
    value: true,
  },
  theme: {
    value: 'auto',
    choices: ['auto', 'light', 'dark'],
  },
}

async function fetchJSON(src) {
  const response = await fetch(src)
  return await response.json()
}

let promise = null
let initiated = false
let initCallback = null
export function init(options) {
  promise ||
    (promise = new Promise((resolve) => {
      initCallback = resolve
    }))

  if (!initiated) {
    initiated = true
    _init(options || {})
  }

  return promise
}

function _init(props, element) {
  const { i18n } = props
  const pickerProps = getProps(props, element)

  if (props.i18n) {
    I18n = i18n
  }

  if (pickerProps.maxFrequentRows) {
    const emojis = FrequentlyUsed.get(pickerProps)
    if (emojis.length) {
      Data.categories.unshift({
        id: 'frequent',
        emojis: emojis,
      })
    }
  }

  initCallback(pickerProps)
}

function getProps(props, element) {
  props || (props = {})

  function get(propName) {
    const defaults = DEFAULT_PROPS[propName]
    let value = (element && element.getAttribute(propName)) || props[propName]

    if (
      value != null &&
      defaults.value &&
      typeof defaults.value != typeof value
    ) {
      if (typeof defaults.value == 'boolean') {
        value = value == 'false' ? false : true
      } else {
        value = defaults.value.constructor(value)
      }
    }

    if (
      value == null ||
      (defaults.choices && defaults.choices.indexOf(value) == -1)
    ) {
      value = defaults.value
    }

    return value
  }

  const _props = {}
  for (let k in DEFAULT_PROPS) {
    _props[k] = get(k)
  }

  return _props
}
