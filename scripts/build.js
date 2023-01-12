#!/usr/bin/env node
const fs = require('fs')
const uglify = require('uglify-js')
const spinn = require('../index.js')

const code = `window.spinn = ${spinn}\n`

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}
fs.writeFileSync('./dist/spinn.js', code)

const result = uglify.minify(code)
fs.writeFileSync('./dist/spinn-min.js', result.code)
