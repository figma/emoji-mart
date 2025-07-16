import { PureComponent } from 'preact/compat'
import {Emoji} from '../Emoji'
import { PureInlineComponent } from '../HOCs'

export default class EmojiButton extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {}
    }

    render() {
        const emoji=this.props.emoji
        const pos = this.props.pos
        const posinset = this.props.posinset
        const grid = this.props.grid
      const size = this.props.emojiButtonSize
      const skin = this.props.skin
      const selected = this.props.selected
      const key = pos.concat(emoji.id).join('')
      const isCurrentEmojiTarget = this.props.isCurrentEmojiTarget
      const tabIndex = isCurrentEmojiTarget ? 0 : -1
      const currentTargetEmojiPosition = this.props.currentTargetEmojiPosition

      const currentTargetEmojiRef = this.props.currentTargetEmojiRef

      if(isCurrentEmojiTarget) {
        console.log(`the current emoji is: `)
        console.log(emoji)
        console.log(`the current state for the current target emoji position is: ${currentTargetEmojiPosition}`)
        console.log(`the current focus position is: ${pos}`)

        console.log(`when rendering emojis, the current ref for target emoji is: `)
        console.log(currentTargetEmojiRef)
      }

      return (
        <PureInlineComponent key={key} {...{ selected, skin, size }}>
          <button
            aria-label={emoji.id}
            aria-selected={selected || undefined}
            aria-posinset={posinset}
            aria-setsize={grid.setsize}
            data-keyboard={this.props.keyboard}
            title={this.props.previewPosition == 'none' ? emoji.id : undefined}
            type="button"
            class="flex flex-center flex-middle"
            tabIndex={tabIndex}
            ref={isCurrentEmojiTarget ? currentTargetEmojiRef : undefined}
            onFocus={this.props.handleFocus}
            onClick={() => this.props.handleEmojiClick({ emoji })}
            style={{
              width: this.props.emojiButtonSize,
              height: this.props.emojiButtonSize,
              fontSize: this.props.emojiSize,
              lineHeight: 0,
              fontFamily:
                'EmojiMart, Segoe UI Emoji, Segoe UI Symbol, Segoe UI, Apple Color Emoji, Twemoji Mozilla, Noto Color Emoji, Android Emoji',
            }}
          >
            <div
              aria-hidden="true"
              class="background"
              style={{
                borderRadius: this.props.emojiButtonRadius,
                backgroundColor: this.props.emojiButtonColors
                  ? this.props.emojiButtonColors[
                      (posinset - 1) % this.props.emojiButtonColors.length
                    ]
                  : undefined,
              }}
            ></div>
            <Emoji
              emoji={emoji}
              set={this.props.set}
              size={this.props.emojiSize}
              skin={skin}
              spritesheet={true}
            />
          </button>
        </PureInlineComponent>
      )
    }
}