
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-placeholder-loading.cjs.production.min.js')
} else {
  module.exports = require('./react-placeholder-loading.cjs.development.js')
}
