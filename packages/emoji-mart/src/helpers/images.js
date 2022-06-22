const URL = 'https://static.figma.com/emoji/4/64/'

function getUrl(emojiSkin) {
  return URL + emojiSkin.unified?.toLowerCase() + '.png'
}

export default { getUrl }
