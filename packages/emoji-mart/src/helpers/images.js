// At writing, this URL is not in use. If it is used again,
// it will need to be updated appropriately to the most
// recent figma-hosted emoji URL base.
const URL = 'https://static.figma.com/emoji/5/noto/small/'

function getUrl(emojiSkin) {
  return URL + emojiSkin.unified?.toLowerCase() + '.png'
}

export default { getUrl }
