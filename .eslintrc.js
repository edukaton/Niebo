module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "settings": {
    "react": {
      "pragma": "Preact",  // Pragma to use, default to "React"
    },
    "import/resolver": {
      "webpack": {
        config: "./build/webpack.dev.js",
      }
    }
  },
  rules: {
    "import/no-commonjs": ["error", "always"],

    "react/forbid-prop-types": 1,
    // "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "react/no-deprecated": 0,
    "react/no-danger": 0,
    "react/jsx-curly-spacing": [2, {"when": "never", "allowMultiline": false}],
    "react/prop-types": 0,
    "function-paren-newline": 0,
    "func-names": 0,
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-console": 0,
    "prefer-template": "warn",
    "eol-last": 0,
    "quote-props": ["error", "as-needed"],
    "indent": ["error", 2, { "SwitchCase": 1, "MemberExpression": 1 }],
    "no-plusplus": 0,
    "no-mixed-operators": ["error", {"allowSamePrecedence": true}],
    "semi": 0,
    "import/prefer-default-export": 0,
    "comma-dangle": ["error", "never"],
    "jsx-a11y/anchor-is-valid": ["error", "never"],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0 
  }
}
