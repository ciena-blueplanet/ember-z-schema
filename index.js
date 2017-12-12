/* eslint-env node */
'use strict'

module.exports = {
  name: 'z-schema',

  included () {
    this._super.included.apply(this, arguments)

    this.import({
      development: 'vendor/z-schema/z-schema.js',
      production: 'vendor/z-schema/z-schema.min.js'
    })
  }
}
