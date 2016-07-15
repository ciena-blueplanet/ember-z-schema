module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'z-schema', target: '3.17.0'}
    ])
      .then(() => {
        return this.addAddonsToProject({
          packages: [
            {name: 'ember-validator-shim', target: '>=0.1.3 <2.0.0'}
          ]
        })
      })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
