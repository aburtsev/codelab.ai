module.exports = {
  extends: '../../../.eslintrc.js',
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.lib.json', 'tsconfig.spec.json'],
  },
}
