module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
  ],
  rules: {
    // "indentation": 2,
    // "at-rule-no-vendor-prefix": true,
    // "at-rule-empty-line-before":"never",
    // "scss/selector-no-redundant-nesting-selector": true,
    // "scss/at-import-partial-extension": "never",
    // "scss/at-mixin-pattern": null,
    // "block-closing-brace-newline-before": "always",
    // "block-closing-brace-newline-after": "always",
    // "at-rule-name-case": "lower",
    // "no-empty-source": null,
    // "no-empty-first-line": null,
    // "at-rule-name-space-after": "always",
    // "at-rule-semicolon-newline-after": null,
    // "at-rule-semicolon-space-before": "never",
    'selector-max-class': 2,
    'order/order': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested',
        ],
        ignore: [
          'after-comment',
          'inside-block',
        ],
        ignoreAtRules: [
          'include',
        ],
      },
    ],
    // "color-hex-length": "long",
    // "selector-class-pattern": null
  },
  overrides: [
    {
      files: ['./**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
}
