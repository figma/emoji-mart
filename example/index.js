import React from 'react'
import ReactDOM from 'react-dom'

import { Picker, Emoji, emojiIndex } from '../src'

const CUSTOM_EMOJIS = [
]

const CATEGORIES = [
  'recent',
  'people',
  'nature',
  'foods',
  'activity',
  'places',
  'objects',
  'symbols',
  'flags',
  'custom',
]

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emojiSize: 24,
      perLine: 9,
      skin: 1,
      native: false,
      set: 'apple',
      hidden: false,
      currentEmoji: { id: '+1' },
      autoFocus: false,
      include: [],
      exclude: [],
    }
  }

  render() {
    window['emojiIndex'] = emojiIndex

    return <div>
        <Picker
          emojiSize={this.state.emojiSize}
          perLine={this.state.perLine}
          skin={this.state.skin}
          native={this.state.native}
          set={this.state.set}
          custom={CUSTOM_EMOJIS}
          autoFocus={this.state.autoFocus}
          include={this.state.include}
          exclude={this.state.exclude}
          onClick={(emoji) => {
            this.setState({ currentEmoji: emoji })
            console.log(emoji)
          }}
        />
    </div>
  }
}

ReactDOM.render(<Example />, document.querySelector('div'))
