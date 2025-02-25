import { HTMLElement } from '.'

export default class ShadowElement extends HTMLElement {
  constructor(props, { styles } = {}) {
    super(props)

    this.setShadow()
    this.injectStyles(styles, props.styleNonce)
  }

  setShadow() {
    this.attachShadow({ mode: 'open' })
  }

  injectStyles(styles, styleNonce) {
    if (!styles) return

    const style = document.createElement('style')
    if (styleNonce !== undefined) {
      style.nonce = styleNonce
    }
    style.textContent = styles

    this.shadowRoot.insertBefore(style, this.shadowRoot.firstChild)
  }
}
