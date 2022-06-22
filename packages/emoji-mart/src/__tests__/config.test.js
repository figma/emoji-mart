import { init, Data } from '../config'

describe('init', () => {
  test.skip('', () => {})
})

describe('Data', () => {
  test('categories', () => {
    expect(Data).toHaveProperty('categories')
    expect(Data.categories.length).toBe(8)
    for (const category of Data.categories) {
      expect(category).toHaveProperty('id')
      expect(category).toHaveProperty('emojis')
    }
  })

  test('emojis', () => {
    expect(Data).toHaveProperty('emojis')
    expect(Object.keys(Data.emojis).length).toBe(1484)
    for (const emojiId of Object.keys(Data.emojis)) {
      const emoji = Data.emojis[emojiId]
      expect(emoji).toHaveProperty('id')
      expect(emoji).toHaveProperty('name')
      expect(emoji).toHaveProperty('search')
      expect(emoji).toHaveProperty('skins')
      for (const skin of emoji.skins) {
        expect(skin).toHaveProperty('unified')
        expect(skin).toHaveProperty('shortcodes')
        expect(skin).toHaveProperty('native')
      }
      expect(emojiId).toBe(emoji.id)
      expect(emojiId).toBe(emoji.name)
      expect(emoji.search.includes(emojiId))
    }
  })

  test('alias', () => {
    expect(Data).toHaveProperty('aliases')
    expect(Data.aliases['satisfied']).toBe('laughing')
    expect(Data.aliases['beetle']).toBe('ladybug')
    expect(Data.aliases['man_in_tuxedo']).toBe('person_in_tuxedo')
  })
})
