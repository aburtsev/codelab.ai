const { types, scopes } = require('./.cz-config.js')

const allowedTypes = types.map((type) => type.value)
const allowedScopes = scopes.map((scope) => scope.value)

module.exports = {
  // plugins: ['commitlint-plugin-jira-rules'],
  extends: [
    '@commitlint/config-conventional',
    // '@commitlint/config-lerna-scopes',
    // 'jira',
  ],
  // parserPreset: {
  //   parserOpts: {
  //     issuePrefixes: ['CODE-'],
  //   },
  // },
  rules: {
    'type-enum': [2, 'always', allowedTypes],
    'scope-enum': [2, 'always', allowedScopes],
    // 'references-empty': [0],
    // 'subject-case': [
    //   2,
    //   'never',
    //   //
    //   // Remove to allow build(doc): CODE-29 some message
    //   //
    //   // ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    //   ['start-case', 'pascal-case', 'upper-case'],
    // ],
  },
}
