import type { Linter } from 'eslint'

import security from 'eslint-plugin-security'

export default {
  name: 'dethdkn/security/rules',
  plugins: { security },
  rules: {
    'security/detect-bidi-characters': ['warn'],
    'security/detect-buffer-noassert': ['warn'],
    'security/detect-child-process': ['warn'],
    'security/detect-disable-mustache-escape': ['warn'],
    'security/detect-eval-with-expression': ['warn'],
    'security/detect-new-buffer': ['warn'],
    'security/detect-no-csrf-before-method-override': ['warn'],
    'security/detect-non-literal-fs-filename': ['warn'],
    'security/detect-non-literal-regexp': ['warn'],
    'security/detect-non-literal-require': ['warn'],
    'security/detect-possible-timing-attacks': ['warn'],
    'security/detect-pseudoRandomBytes': ['warn'],
    'security/detect-unsafe-regex': ['warn'],
  },
} as Linter.FlatConfig
