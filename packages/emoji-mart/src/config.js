import i18n_en from '../../emoji-mart-data/i18n/en.json'
import data_default from '../../emoji-mart-data/sets/15/native.json'
import { FrequentlyUsed, NativeSupport } from './helpers'

function getReverseAliasMap(data) {
  const reverseAliasMap = {}
  for (const alias of Object.keys(data.aliases)) {
    reverseAliasMap[data.aliases[alias]] = alias
  }
  return reverseAliasMap
}

// Transformed minimized emoji-data into the form that the library expects
// When we decide to load this data asynchronous, we'll want to move this logic into packages/emoji-mart-data/build.js
function getProcessedData(data) {
  data.natives = {}
  const reverseAliasMap = getReverseAliasMap(data)
  Object.keys(data.emojis).forEach((id) => {

    // data.emojis[id] might have one of two formats
    // - Legacy :: a list of "skins" (legacy)
    // - Updated(rich) :: an object such that {skins: [...], keywords: [...]}
    // -> the lagacy format was created to reduce bundle size. but data passed in as a prop might use the rich format.
    const skins = data.emojis[id].skins ?? data.emojis[id]
    const keywords = data.emojis[id].keywords ?? []

    const emoji = {}
    emoji.id = id
    emoji.keywords = keywords
    emoji.search =
      `,` +
      /* TODO: once we load in the emoji data asynchronously, we can add back keyword support.
       * we do this because we want to reduce the bundle size for initial page load.
       **/
      [
        ...new Set(
          [
            emoji.id,
            ...emoji.id.split(/[-|_|\s]+/),
            ...(reverseAliasMap[emoji.id] || '').split(/[-|_|\s]+/),
            // include keywords if available
            ...(emoji.keywords || []),
          ]
            .map((string) => {
              if (!string) return ''
              return string.toLowerCase()
            })
            .filter((a) => a && a.trim()),
        ),
      ].join(',')

    emoji.skins = skins
    emoji.skins.forEach((skin, index) => {
      if (skin) {
        const skinShortcodes = index + 1 == 1 ? '' : `:skin-tone-${index + 1}:`
        skin.shortcodes = `:${emoji.id}:${skinShortcodes}`

        const native = NativeSupport.unifiedToNative(skin.unified)
        data.natives[native] = skin.shortcodes
      }
    })
    data.emojis[id] = emoji
  })
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
    value: 15,
    choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14, 15],
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

  // If data is provided as a prop, use it instead of the default data
  if (props.data) {
    Data = getProcessedData(props.data)
  }

  if (props.i18n) {
    I18n = i18n
  }

  // If opted in, allow the caller to control what shows up in the freuqent section 
  // (helpful for keeping external ui in sync)
  if (props.frequentEmojisOverride) {
    let frequentEmojis = props.frequentEmojisOverride
    if (frequentEmojis.length) {
      // Trim if needed 
      if (pickerProps.maxFrequentRows) {
        frequentEmojis = frequentEmojis.slice(0, pickerProps.maxFrequentRows * pickerProps.perLine)
      }
      Data.categories.unshift({
        id: 'frequent',
        emojis: frequentEmojis,
      })
    }
  }
  else {
    if (pickerProps.maxFrequentRows) {
      const emojis = FrequentlyUsed.get(pickerProps)
      if (emojis.length) {
        Data.categories.unshift({
          id: 'frequent',
          emojis: emojis,
        })
      }
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
