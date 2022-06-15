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
    }
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

    const categoryIcons =
      Icons.categories[category.id] || Icons.categories.custom

    return categoryIcons
  }

  render() {
    let selectedCategoryIndex = null

    return (
      <nav id="nav" class="padding" data-position={this.props.position}>
        <div class="flex relative">
          {this.categories.map((category, i) => {
            const title = category.name || I18n.categories[category.id]
            const selected =
              !this.props.unfocused && category.id == this.state.categoryId

            if (selected) {
              selectedCategoryIndex = i
            }

            return (
              <button
                aria-label={title}
                aria-selected={selected || undefined}
                title={title}
                type="button"
                class="flex flex-grow flex-center"
                onClick={() => {
                  this.props.onClick({ category, i })
                }}
              >
                {this.renderIcon(category)}
              </button>
            )
          })}

          <div
            class="bar"
            style={{
              width: `${100 / this.categories.length}%`,
              opacity: selectedCategoryIndex == null ? 0 : 1,
              transform: `translateX(${selectedCategoryIndex * 100}%)`,
            }}
          ></div>
        </div>
      </nav>
    )
  }
}
