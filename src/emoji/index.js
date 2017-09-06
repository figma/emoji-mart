// Transform our minimized emoji dataset into the form the library expects, more or less

import emoji_data from './emoji_data.js'

let categories = []
let emojis = {}
let short_names = {}
let skins = {}

const category_names = ["People",
                        "Nature",
                        "Foods",
                        "Activity",
                        "Places",
                        "Objects",
                        "Symbols",
                        "Flags"]

const SKIN_TONE_EMOJI = {'261D': true, '26F9': true, '270A': true, '270B': true, '270C': true, '270D': true, '1F385': true, '1F3C2': true, '1F3C3': true, '1F3C4': true, '1F3C7': true, '1F3CA': true, '1F3CB': true, '1F3CC': true, '1F442': true, '1F443': true, '1F446': true, '1F447': true, '1F448': true, '1F449': true, '1F44A': true, '1F44B': true, '1F44C': true, '1F44D': true, '1F44E': true, '1F44F': true, '1F450': true, '1F466': true, '1F467': true, '1F468': true, '1F469': true, '1F46E': true, '1F470': true, '1F471': true, '1F472': true, '1F473': true, '1F474': true, '1F475': true, '1F476': true, '1F477': true, '1F478': true, '1F47C': true, '1F481': true, '1F482': true, '1F483': true, '1F485': true, '1F486': true, '1F487': true, '1F4AA': true, '1F574': true, '1F575': true, '1F57A': true, '1F590': true, '1F595': true, '1F596': true, '1F645': true, '1F646': true, '1F647': true, '1F64B': true, '1F64C': true, '1F64D': true, '1F64E': true, '1F64F': true, '1F6A3': true, '1F6B4': true, '1F6B5': true, '1F6B6': true, '1F6C0': true, '1F6CC': true, '1F918': true, '1F919': true, '1F91A': true, '1F91B': true, '1F91C': true, '1F91E': true, '1F91F': true, '1F926': true, '1F930': true, '1F931': true, '1F932': true, '1F933': true, '1F934': true, '1F935': true, '1F936': true, '1F937': true, '1F938': true, '1F939': true, '1F93D': true, '1F93E': true, '1F9D1': true, '1F9D2': true, '1F9D3': true, '1F9D4': true, '1F9D5': true, '1F9D6': true, '1F9D7': true, '1F9D8': true, '1F9D9': true, '1F9DA': true, '1F9DB': true, '1F9DC': true, '1F9DD': true}

for (var category_name_idx in category_names) {
  let category_name = category_names[category_name_idx]
  let category = {name: category_name, emojis: []}
  for (let emoji_idx in emoji_data.emoji_data[category_name]) {
    let emoji = emoji_data.emoji_data[category_name][emoji_idx]
    emoji.short_names = emoji.shortNames
    delete emoji.shortNames
    emoji.name = emoji.short_names[0]
    emojis[emoji.name] = emoji
    emoji.unified = emoji.unified[0]
    emoji.search = emoji.name
    category.emojis.push(emoji)

    if (SKIN_TONE_EMOJI[emoji.unified] === true) {
      emoji.skin_variations = {"1F3FB": {unified: emoji.unified + "-1F3FB"},
                               "1F3FC": {unified: emoji.unified + "-1F3FC"},
                               "1F3FD": {unified: emoji.unified + "-1F3FD"},
                               "1F3FE": {unified: emoji.unified + "-1F3FE"},
                               "1F3FF": {unified: emoji.unified + "-1F3FF"},
                              }
    }
  }
  categories.push(category)
}

for (let emoji_idx in emoji_data.emoji_data["Skin Tones"]) {
  let emoji = emoji_data.emoji_data["Skin Tones"][emoji_idx]
  emoji.short_names = emoji.shortNames
  delete emoji.shortNames
  emoji.name = emoji.short_names[0]
  skins[emoji.name] = emoji
}

export default { categories, emojis, short_names, skins }
