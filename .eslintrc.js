// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/script-indent': ['error', 2, {'baseIndent': 1}],
    'indent': 'off',
    //空行最多不能超过100行,关闭检测
    "no-multiple-empty-lines": ['off', {"max": 100}],
    "no-unused-vars": ['off', {
      // 允许声明未使用的本地变量
      "vars": "local",
      // 不检查函数参数
      "args": "none"
    }],
    // 关闭强制语句以分号结尾
    "semi": ['off', 'always'],
    // https://cn.eslint.org/docs/rules/comma-dangle
    // 要求或禁止使用拖尾逗号 (comma-dangle),never为禁止使用
    "comma-dangle": ["off", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }]
  }
}
