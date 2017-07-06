/* eslint-env node */
module.exports = function (environment) {
  var ENV = {
    APP: {},
    rootURL: '/',
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    environment: environment,
    locationType: 'hash',
    modulePrefix: 'dummy'
  }

  switch (environment) {
    case 'test':
      // Testem prefers this...
      ENV.rootURL = '/'
      ENV.locationType = 'none'

      // keep test console output quieter
      ENV.APP.LOG_ACTIVE_GENERATION = false
      ENV.APP.LOG_VIEW_LOOKUPS = false

      ENV.APP.rootElement = '#ember-testing'
      break
  }

  return ENV
}
