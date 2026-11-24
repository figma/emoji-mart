// Type declarations for emoji-mart.
//
// Written by hand to match the JavaScript in this directory. `yarn build` copies this file to
// `dist/index.d.ts`, which `package.json` points to. When you change an export, update this file to
// match.
//
// The declarations use DOM types (`HTMLElement`, `Node`) and nothing from React, so they work the
// same with React 18, React 19 and without React.

/** A skin tone: 1 is the default (no tone), 2 to 6 run from light to dark. */
export type EmojiSkin = 1 | 2 | 3 | 4 | 5 | 6

export type EmojiSet = 'native' | 'apple' | 'facebook' | 'google' | 'twitter'

/** One skin tone of an emoji, as found in `Data.emojis[id].skins`. */
export interface EmojiSkinData {
  /** The emoji's code points in lowercase hex, joined by `-`, like `1f44d-1f3fd`. */
  unified: string
  /** Like `:+1:` for the default tone, or `:+1::skin-tone-4:`. */
  shortcodes: string
  /** The emoji as text. Present only when the dataset includes it, as the rich datasets do. */
  native?: string
}

/** An emoji in `Data.emojis`, as `SearchIndex` returns it. */
export interface EmojiData {
  id: string
  /** The terms search matches, lowercase, each preceded by a comma, like `,+1,thumbsup`. */
  search: string
  /** The default tone first, then tones 2 to 6 if the emoji has them. */
  skins: EmojiSkinData[]
  /**
   * The dataset's keywords for this emoji. The library always sets it, to `[]` when the dataset
   * has none. It's optional so code can build `EmojiData` for tests without it.
   */
  keywords?: string[]
}

/** The emoji the user picked, as passed to `PickerProps.onEmojiSelect`. */
export interface SelectedEmojiData {
  id: string
  /** The picked tone's code points, like `1f44d-1f3fd`. */
  unified: string
  /** The picked tone's shortcodes, like `:+1::skin-tone-4:`. */
  shortcodes: string
  /**
   * The emoji's keywords. The picker always sets it. It's optional so code can build
   * `SelectedEmojiData` itself without it.
   */
  keywords?: string[]
}

export interface Category {
  id: string
  /** Emoji ids, in the order the picker shows them. */
  emojis: string[]
  /** The category's heading. Without it, the picker uses `I18n.categories[id]`. */
  name?: string
}

/** The emoji data the library uses, after `init` has processed it. This is the type of `Data`. */
export interface EmojiMartData {
  categories: Category[]
  /** Every emoji, by id. */
  emojis: Record<string, EmojiData>
  /** Other names for emoji, mapped to their ids, like `thumbsup` to `+1`. */
  aliases: Record<string, string>
  /** Each tone of each emoji as text, mapped to its shortcodes. */
  natives: Record<string, string>
  sheet?: { cols: number; rows: number }
}

/** One skin tone in a dataset passed to `init`. */
export interface EmojiSkinInput {
  unified: string
  native?: string
}

/**
 * One emoji in a dataset passed to `init`: either just its skin tones, as the bundled data has them,
 * or an object with its skins and keywords, as the rich datasets have them.
 */
export type EmojiDataInput =
  | EmojiSkinInput[]
  | { skins: EmojiSkinInput[]; keywords?: string[] }

/**
 * A dataset to pass to `init` in place of the bundled one. `Data` is one too, so processed data
 * can be passed back. `init` processes the object in place and keeps it as `Data`.
 */
export interface EmojiMartDataInput {
  categories: Category[]
  emojis: Record<string, EmojiDataInput>
  aliases: Record<string, string>
  sheet?: { cols: number; rows: number }
}

/** The picker's text. This is the type of `I18n`. */
export interface EmojiMartI18n {
  search: string
  search_no_results: string
  /** The search box's label for screen readers. The bundled English text doesn't have it. */
  search_for_emojis?: string
  /** Tells screen readers that results update as you type. The bundled English text doesn't have it. */
  search_will_update?: string
  pick: string
  categories: {
    activity: string
    flags: string
    foods: string
    frequent: string
    nature: string
    objects: string
    people: string
    places: string
    search: string
    symbols: string
    /** The heading of any other category in `Data.categories`. */
    [categoryId: string]: string
  }
  skins: {
    choose: string
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }
}

/**
 * How the picker looks and behaves. The first call to `init` fixes these for every picker on the
 * page, as `init` only runs once. So when `init` has already run, a `Picker`'s own values are
 * ignored, except `set`. Values outside the listed choices fall back to the default.
 */
export interface PickerOptions {
  /** Focus the search box when the picker opens. Defaults to `false`. */
  autoFocus?: boolean
  /** Background colors for the emoji buttons, used in turn. Defaults to none. */
  emojiButtonColors?: string[] | null
  /** A CSS length. Defaults to `'100%'`. */
  emojiButtonRadius?: string
  /** In pixels. Defaults to `34`. */
  emojiButtonSize?: number
  /** In pixels. Defaults to `22`. */
  emojiSize?: number
  /** Defaults to `4`. Set `0` for no Frequently Used category. */
  maxFrequentRows?: number
  /** Defaults to `'top'`. */
  navPosition?: 'top' | 'bottom' | 'none'
  /** The id of the emoji shown when a search finds nothing. Defaults to `cry`. */
  noResultsEmoji?: string | null
  /** Emoji per row. Defaults to `9`. */
  perLine?: number
  /**
   * The id of the emoji the preview shows when no emoji is hovered. Defaults to `point_up`, or
   * `point_down` when `previewPosition` is `'top'`.
   */
  previewEmoji?: string | null
  /** Defaults to `'bottom'`. */
  previewPosition?: 'top' | 'bottom' | 'none'
  /** Defaults to `'native'`. */
  set?: EmojiSet
  /** The skin tone to use until the user picks one. Defaults to `1`. */
  skin?: EmojiSkin
  /** Defaults to `true`. */
  stickySearch?: boolean
  /** Defaults to `'auto'`, which follows the system setting. */
  theme?: 'auto' | 'light' | 'dark'
}

export interface InitOptions extends PickerOptions {
  /** A dataset to use in place of the bundled one, such as a rich one with keywords. */
  data?: EmojiMartDataInput
  /** The picker's text, in place of the bundled English. Replaces `I18n` whole. */
  i18n?: EmojiMartI18n
  /**
   * Emoji ids for the Frequently Used category, in place of the ones saved from the user's picks.
   * Trimmed to `maxFrequentRows` rows, but shown even when `maxFrequentRows` is `0`. An empty list
   * leaves out the category.
   */
  frequentEmojisOverride?: string[]
}

/**
 * An object holding the element to add a picker or emoji to, as a React ref does. Works with
 * React 18's and React 19's refs, and with any `{ current }` object.
 */
export interface ElementRef {
  readonly current: Node | null | undefined
}

export interface PickerProps extends InitOptions {
  /**
   * The constructor adds the picker to `ref.current`, if set, unless `parent` is given. It reads
   * `ref.current` once, so set it before constructing the picker.
   */
  ref?: ElementRef | null
  /** The element the constructor adds the picker to. Takes precedence over `ref`. */
  parent?: Node | null
  /** The nonce for the `<style>` the picker adds to its shadow root, for a CSP that requires one. */
  styleNonce?: string
  onEmojiSelect?: (emoji: SelectedEmojiData) => void
  /** Called when Escape is pressed in the picker, unless it clears a search instead. */
  onEscapeKeydown?: () => void
}

/**
 * The emoji picker, a custom element (`<em-emoji-picker-15>`) that renders into its shadow root
 * once it's in the document. Construct it with `new Picker(props)`; it's not a React component.
 */
export declare class Picker extends HTMLElement {
  constructor(props: PickerProps)
  props: PickerProps
}

export interface EmojiProps {
  /** The constructor adds the emoji to `ref.current`, if set, unless `parent` is given. */
  ref?: ElementRef | null
  /** The element the constructor adds the emoji to. Takes precedence over `ref`. */
  parent?: Node | null
}

/**
 * One emoji, a custom element (`<em-emoji-15>`). It renders from its attributes, read when it's
 * added to the document: `id`, `shortcodes` or `native` to choose the emoji, and `set`, `size` and
 * `fallback`. Its constructor's props only say where to add it.
 */
export declare class Emoji extends HTMLElement {
  constructor(props?: EmojiProps)
  props: EmojiProps
}

/**
 * Lookups and search over `Data`. Call `init` before the synchronous ones, which otherwise use the
 * bundled data.
 */
export interface SearchIndexApi {
  /** Finds an emoji by id, alias (like `thumbsup`) or text (like `👍`). */
  get(emojiId: string): EmojiData | undefined
  /** Given an object with an `id`, returns it as it is. */
  get<T extends { id: string }>(emoji: T): T
  /** Like `:+1::skin-tone-4:` for `👍🏽`. */
  getShortcodeFromNative(native: string): string | undefined
  /**
   * Emoji matching every word of `value`, best first, at most `maxResults` (default 90). Waits for
   * `init`. `null` when `value` is blank, `undefined` when it has no words, like `','`.
   */
  search(
    value: string,
    options?: { maxResults?: number },
  ): Promise<EmojiData[] | null | undefined>
  /** `search` without waiting for `init`. */
  searchSynchronized(
    value: string,
    options?: { maxResults?: number },
  ): EmojiData[] | null | undefined
  /** Matches shortcodes like `:+1:` or `:+1::skin-tone-4:`, capturing the id and the tone. */
  SHORTCODES_REGEX: RegExp
}

export declare const SearchIndex: SearchIndexApi

/** Values saved in `localStorage` under `emoji-mart.<key>`, as JSON. */
export interface StoreApi {
  set(key: string, value: unknown): void
  /** The parsed value, or `undefined` if there's none or it can't be read. */
  get(key: string): any
  /** The skin tone the user picked in the picker, or `undefined` if they haven't. */
  getDefaultSkin(): EmojiSkin | null | undefined
}

export declare const Store: StoreApi

export interface NativeSupportApi {
  /** The latest emoji version the browser can draw, like `14`. Draws on a canvas to find out. */
  latestVersion(): number | undefined
  /** Whether the browser draws flags as letters, as Windows does. */
  noCountryFlags(): boolean
  /** The emoji as text, from its `unified` code points, like `1f44d` to `👍`. */
  unifiedToNative(unified: string): string
}

export declare const NativeSupport: NativeSupportApi

/**
 * Sets up the library: processes `data` into `Data`, sets `I18n`, and fixes the picker's options.
 * Runs once: later calls, including the ones the picker and `SearchIndex.search` make, return the
 * first call's promise and ignore their options. With no `data`, it uses the bundled data, which
 * has no keywords.
 */
export declare function init(options?: InitOptions): Promise<void>

/** The emoji data in use. `init` replaces it when given `data`. */
export declare let Data: EmojiMartData

/** The picker's text. `init` replaces it when given `i18n`. */
export declare let I18n: EmojiMartI18n
