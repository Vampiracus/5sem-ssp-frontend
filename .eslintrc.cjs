module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  "rules": {
    "indent": [
        "error",
        4
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        "always"
    ],
    "import/extensions": "off",
    "no-restricted-exports": "off",
    "comma-spacing": "error",
    "comma-dangle": [
        "error",
        {
            "functions": "never", 
            "objects": "always-multiline",
            "arrays": "always-multiline"
        }
    ],
    "no-underscore-dangle": ["off"],
    "no-restricted-syntax": ["off"],
    "arrow-parens": ["error", "as-needed"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-param-reassign": "error",
    "no-console": "off",
    "no-use-before-define": ["error", {
        "functions": false,
        "classes": true,
        "variables": true,
        "allowNamedExports": false
    }],
    "prefer-const": "error",
    "space-infix-ops": "error",
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", { "code": 100 }],
    "operator-linebreak": ["error", "before"],
    "object-curly-newline": ["error", {
        "ObjectExpression": { "multiline": true},
        "ObjectPattern": { "multiline": true },
        "ImportDeclaration": { "multiline": true },
        "ExportDeclaration": { "multiline": true }
    }],
    "brace-style": ["error", "1tbs"],
    "space-before-blocks": "error",
    "key-spacing": ["error", {
        "afterColon": true,
        "beforeColon": false,
        "mode": "minimum"
        }],
    "no-var": "error",


    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/no-explicit-any": "off"
}
}
