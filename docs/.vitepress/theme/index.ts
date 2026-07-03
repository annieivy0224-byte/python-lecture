import DefaultTheme from 'vitepress/theme'
import IndexDemo from '../../../docs/components/IndexDemo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全域註冊，所有 .md 頁面都可以直接用 <IndexDemo />
    app.component('IndexDemo', IndexDemo)
  },
}