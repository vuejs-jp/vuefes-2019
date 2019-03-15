module.exports = {
  plugins: ['stylelint-scss'],
  extends: 'stylelint-config-standard',
  rules: {
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null, // Prettier と競合するため
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
}
