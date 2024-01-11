import { render } from 'preact'

import { init } from '../../config'
import { ShadowElement } from '../HTMLElement'
import { Picker, PickerStyles } from '.'

export default class PickerElement extends ShadowElement {
  constructor(props) {
    super(props, { styles: PickerStyles })
  }

  async connectedCallback() {
    const pickerProps = await init(this.props, this)
    const { onEmojiSelect, onClickOutside, onEscapeKeydown } = this.props

    const props = {
      ...pickerProps,
      element: this,
      onEmojiSelect,
      onClickOutside,
      onEscapeKeydown,
    }

    render(<Picker {...props} />, this.shadowRoot)
  }
}

if ('customElements' in window && !customElements.get('em-emoji-picker-15')) {
  customElements.define('em-emoji-picker-15', PickerElement)
}
