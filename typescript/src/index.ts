

// 报错
// import fs from 'fs'
// fs.readFileSync('./')

// 正确
import { readFileSync } from 'fs'
readFileSync('./')

// 正确
import * as fs from 'fs'
fs.readFileSync('./')