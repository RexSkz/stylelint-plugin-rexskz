'use strict';

module.exports = {
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-no-vendor-prefix': true,
    'color-function-notation': 'legacy',
    'color-hex-length': 'short',
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',
    'hue-degree-notation': 'angle',
    'import-notation': 'string',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': true,
    'selector-attribute-quotes': 'always',
    'selector-no-vendor-prefix': true,
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'single',
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
  },
  extends: [
    'stylelint-config-html',
    'stylelint-config-idiomatic-order',
    'stylelint-config-prettier',
    'stylelint-config-recommended-less',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended',
  ],
};
