import { Data } from '../config'
import { Images } from '../helpers'
import axios from 'axios'

const testIf = process.env.TEST_IMAGES ? test : test.skip

describe('images', () => {
  testIf(
    'exist',
    async () => {
      const missingImages = []
      const batchSize = 10
      const batches = []
      let currentBatch = []
      for (const emoji of Object.values(Data.emojis)) {
        for (const skin of emoji.skins) {
          const url = Images.getUrl(skin)
          if (currentBatch.length === batchSize) {
            batches.push(currentBatch)
            currentBatch = []
          }
          currentBatch.push(url)
        }
      }
      if (currentBatch.length > 0) {
        batches.push(currentBatch)
      }
      for (const batch of batches) {
        const requests = []
        for (const url of batch) {
          requests.push(
            axios.head(url, {
              validateStatus: function (status) {
                return status < 500
              },
            }),
          )
        }
        const responses = await Promise.all(requests)
        for (const response of responses) {
          if (response.status !== 200) {
            missingImages.push(response.config.url)
          }
        }
      }
      if (missingImages.length > 0) {
        console.log('missing images', missingImages)
      }
      expect(missingImages.length).toBe(0)
    },
    1000 * 100 /* 100 seconds */,
  )
})
