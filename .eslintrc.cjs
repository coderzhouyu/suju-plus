module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    // '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: "latest",
    // 想使用的额外的语言特性
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 强制使用分号结束语句。
    semi: ["error", "always"],
    // 强制使用单引号或双引号作为字符串的引号。
    quotes: ["error", "single"],
    // 强制使用两个空格作为缩进。
    indent: ["error", 2],
    // 强制检测未使用的变量。
    "no-unused-vars": "warn",
    // 禁止在代码中使用 console。
    "no-console": "warn",
    // 禁止对 const 声明的变量重新赋值。
    "no-const-assign": "error",
    // 禁止使用 var 声明变量。
    "no-var": "error",
    // 当变量不会被重新赋值时，推荐使用 const 声明变量。
    "prefer-const": "error",
    // 强制箭头函数的箭头前后有空格。
    "arrow-spacing": "error",
    // 禁止行末尾出现多余的空格。
    "no-trailing-spaces": "error",
    // 强制使用 === 和 !==。
    // 'eqeqeq': 'error',
    // 强制在代码块中开括号前和闭括号后有空格。
    "block-spacing": "error",
    // 强制使用驼峰拼写法命名规定。
    // 'camelcase': 'error',
    // 强制使用大括号风格。
    "brace-style": "error",
    // 关闭vue事件驼峰
    "vue/v-on-event-hyphenation": "off",
    // 关闭vue属性驼峰
    "vue/attribute-hyphenation": "off",
    "vue/no-mutating-props": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off", // vue3.2.28 开始支持多个根节点
    // 禁止不必要的 catch 子句
    "no-useless-catch": "off",
    "no-alert": "off",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
}
