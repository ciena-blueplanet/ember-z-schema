# 5.0.2 (2019-10-29)
* Removed ember-frost-test
* Updated lodash-shim and validator-shim


# 5.0.1 (2018-10-16)
* Removed ember-frost-test
* Updated lodash-shim and validator-shim


# 5.0.0 (2018-10-16)
* Update ember-cli-babel to 6.6.0
* Update other dependencies to remove deprecations


# 4.0.1 (2018-07-20)

* **Fixed** Travis API key.


# 4.0.0 (2018-03-20)
* Updated pull request template
* Added issue template
* Updated to pr-bumper version 3
* Updated to node 8
* Added slack integration
* Updated ember-frost-test to ^4.0.1
* Updated ember-test-utils to ^8.1.1
* Updated ember-lodash-shim to ^3.0.1
* Updated ember-validator-shim to ^3.0.1
* Removed ignoring of package-lock.json file
* Added package-lock.json file
* The change from this PR:
* Updated Travis CI scripts to work with node 8

# 3.0.0 (2018-01-05)

* Remove useLintTree from ember-cli-mocha configuration
* Remove reference to unused ember-cli-code-coverage configuration
* Move `ember-cli-htmlbars` NPM dependency to devDependency
* Pin `ember-cli-htmlbars-inline-precompile` NPM devDependency to `0.3.12`
* Update `ember-lodash-shim` to `^2.0.7`
* Upgrade `ember-validator-shim` to `^3.0.0`
* Install `ember-frost-test` @ `^4.0.0`
* Add information in README about which version of z-schema is provided
* gitignore _package-lock.json_ until officially support Node 8

# 2.4.3 (2017-12-12)
* **Updated** super call inside of `included` hook of `index.js` to bind the context to `this`

# 2.4.2 (2017-07-07)

Upgrade ember-cli to 2.12.3


# 2.4.1 (2017-05-11)
* **Added** `pr-bumper.json` file to fix publishing


# 2.4.0 (2017-03-22)

* **Changed** shim to supply *z-schema* via vendor to get smaller builds.

  Before vendor optimization:
  ```
  - dist/assets/dummy-5aeccc86d87e8389ecd0bea3de9e00bd.js: 3.09 KB (1.21 KB gzipped)
  - dist/assets/dummy-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
  - dist/assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
  - dist/assets/vendor-d7e1e09be62f6068e2519975df7a63b9.js: 814.94 KB (211.05 KB gzipped)
  ```

  After vendor optimization:
  ```
  - dist/assets/dummy-5aeccc86d87e8389ecd0bea3de9e00bd.js: 3.09 KB (1.21 KB gzipped)
  - dist/assets/dummy-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
  - dist/assets/vendor-5314396ae7621e7252f782e9a0c4a9b1.js: 754.75 KB (204.73 KB gzipped)
  - dist/assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
  ```

  Approximately 60 KB were shaved off.

* **Removed** blueprints as they are no longer necessary.

# 2.3.1 (2017-03-17)

* **Fixed** build by explicitly pinning `5to6-codemod` to version `1.4.0`.

# 2.3.0

* **Replaced** bower dependencies with node dependencies.
* **Updated** `ember-lodash-shim` to version `2.0.0` which shaves over 150 KB off of the production build.


# 2.2.3

* **Fixed** build so it'll publish.

# 2.2.2

* **Updated** linting to use linting tools from `ember-test-utils`.


# 2.2.1

* **Updated** CI to test in Chrome as well as Firefox.


# 2.2.0

* **Added** `ember-lodash-shim` configuration to optimize build to only include necessary `lodash` methods.


# 2.1.1

* **Upgraded** to test against Ember 2.11.


# 2.1.0

* **Added** additional builds to CI to make sure addon works with latest versions of Ember.
* **Removed** files from npm package that aren't necessary (all of the various config files).
* **Updated** dependencies to latest versions.


# 2.0.0

* **Upgraded** to latest `z-schema` and `ember-validator-shim`/`validator`.



# 1.0.3

* **Fixed** build.


# 1.0.2

* **Fixed** shim to work with `z-schema` version `3.18.1` and updated blueprint to install that version.



# 1.0.1

* **Updated** Travis configuration to test addon against older versions of Ember.



# 1.0.0

* **Added** missing dependencies.



# 0.2.33
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.32
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.31
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.30
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.29
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.28
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.27
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.26
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.25
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.24
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.23
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.22
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.21
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.20
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.19
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.18
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.17
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.16
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.15
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.14
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.13
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.12
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.11
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.10
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.9
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.8
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.7

* **Fixed** bug where `process` was undefined by replacing `process.nextTick` with `Ember.run.later`.



# 0.2.6
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.5
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.0

* **Changed** from `ember-lodash` to `ember-lodash-shim` to switch from `lodash` 3.x to 4.x.



# 0.1.3

* **Fixed** tests so they will pass linting in PR #4.


# 0.1.2

* **Fixed** `lodash` imports within `z-schema` code.


# 0.1.1

* **Fixed** build.


# 0.1.0 (June 10, 2016)

* **Added** initial implementation.
