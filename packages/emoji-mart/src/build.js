import { writeFile, rmSync } from 'fs'
import { Data } from './config'

const DRY_RUN = process.argv.indexOf('--dry') != -1
const FOLDER = './'
const FILE = 'data.json'

if (!DRY_RUN) {
  rmSync('sets', { recursive: true, force: true })
  writeFile(`${FOLDER}/${FILE}`, JSON.stringify(Data), (err) => {
    if (err) throw err
  })
}
