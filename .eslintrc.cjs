/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        //单引号
        singleQuote: true,
        //无需分号
        semi: false,
        //每行宽度80字符
        printWidth: 80,
        //不加对象|数组最后逗号
        trailingComma: 'none',
        //换行符不限制
        endOfLine: 'auto'
      }
    ]
  }
}
