import DefaultTheme from 'vitepress/theme'
import IndexDemo from '../../components/IndexDemo.vue'
import NestedListDemo from '../../../docs/components/NestedListDemo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全域註冊，所有 .md 頁面都可以直接用 <IndexDemo /> 、 <NestedListDemo />
    app.component('IndexDemo', IndexDemo)
    app.component('NestedListDemo', NestedListDemo) 
  },
}