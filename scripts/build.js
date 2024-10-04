import { mkdirp } from 'mkdirp'
import { rimraf } from 'rimraf'
import { Writer } from 'styled-map-package'
import offlineStyle from 'mapeo-offline-map' assert { type: 'json' }
import fs from 'fs'
import { pipeline } from 'stream/promises'

rimraf.sync('dist')
mkdirp.sync('dist')

const writer = new Writer(offlineStyle)
writer.finish()
const smpFile = fs.createWriteStream('dist/comapeo-fallback-map.smp')
await pipeline(writer.outputStream, smpFile)
