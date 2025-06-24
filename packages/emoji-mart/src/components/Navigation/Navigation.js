import { createRef } from 'preact'
import { PureComponent } from 'preact/compat'
import { Data, I18n } from '../../config'
import Icons from '../../icons'

export default class Mavigation extends PureComponent {
  constructor() {
    super()

    this.categories = Data.categories.filter((category) => {
      return !category.target
    })

    this.state = {
      categoryId: this.categories[0].id,
      categoryIndex: 0,
    }

    this.tabRefs = this.categories.map((_) => createRef())
  }

  renderIcon(category) {
    const { icon } = category

    if (icon) {
      if (icon.svg) {
        return (
          <span
            class="flex"
            dangerouslySetInnerHTML={{ __html: icon.svg }}
          ></span>
        )
      }

      if (icon.src) {
        return <img src={icon.src} />
      }
    }

    return Icons.categories[category.id]
  }

  handleKeyDown = (e) => {
    e.stopImmediatePropagation()
    e.preventDefault()

    var newCategoryIndex = null
    switch (e.key) {
      case 'ArrowLeft':
         newCategoryIndex = this.state.categoryIndex - 1
        if (this.state.categoryIndex > 0) {
          this.setState({ categoryIndex: newCategoryIndex })
          this.props.onCategoryChange({category: this.categories[newCategoryIndex], i: newCategoryIndex})
          this.tabRefs[newCategoryIndex].current?.focus()
        }
        break
      case 'ArrowRight':
        newCategoryIndex = this.state.categoryIndex + 1
        if (this.state.categoryIndex < this.categories.length - 1) {
          this.setState({ categoryIndex: newCategoryIndex })
          this.props.onCategoryChange({category: this.categories[newCategoryIndex], i: newCategoryIndex})

          this.tabRefs[newCategoryIndex].current?.focus()
        }
        break
      case 'Tab': 
        if (!e.shift && this.props.searchInputRef.current) {  
          this.props.searchInputRef.current.focus()
        }
      default:
        break
    }
  }

  render() {
    return (
      <nav id="nav" class="padding" data-position={this.props.position}>
        <div class="flex relative" role="tablist" tabIndex={0} onKeyDown={this.handleKeyDown}>
          {this.categories.map((category, i) => {
            const title = category.name || I18n.categories[category.id]
            const selected =
              !this.props.unfocused && i == this.state.categoryIndex

            return (
              <button
                aria-label={title}
                aria-selected={selected || undefined}
                title={title}
                type="button"
                class="flex flex-grow flex-center"
                role="tab"
                ref={this.tabRefs[i]}
              >
                {this.renderIcon(category)}
              </button>
            )
          })}

          <div
            class="bar"
            style={{
              width: `${100 / this.categories.length}%`,
              opacity: this.props.unfocused ? 0 : 1,
              transform: `translateX(${this.state.categoryIndex * 100}%)`,
            }}
          ></div>
        </div>
      </nav>
    )
  }
}
