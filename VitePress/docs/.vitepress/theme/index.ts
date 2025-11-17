import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Blog from './components/Blog.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('Blog', Blog)
  }
} satisfies Theme