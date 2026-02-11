
function getStaticAssetHost() {
  if (window.location.hostname === 'figma-gov.com') {
    return 'static.figma-gov.com'
  }
  return 'static.figma.com'

}

function getUrlBase() {
  return `https://${getStaticAssetHost()}/emoji/5/noto/small/`
}

function getUrl(emojiSkin) {
  return getUrlBase() + emojiSkin.unified?.toLowerCase() + '.png'
}


export default { getUrl }
