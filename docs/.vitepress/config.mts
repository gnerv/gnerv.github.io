import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = ({
  title: "Li Gen 的小站",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '资源',
        items: [
          { text: '3.x', link: '/springboot/30.3x版本/' },
          { text: '4.x', link: '/springboot/40.4x版本/' }
        ]
      },
      { text: 'Spring Boot', link: '/springboot/' },
      { text: '笔记', link: '/note/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '页面导航'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019 Li Gen'
    }
  },
})

const vitePressSidebarOptions = [
  {
    // VitePress Sidebar's options here...
    documentRootPath: '/docs',
    collapsed: false,
    capitalizeFirst: true
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'guide',
    resolvePath: '/guide/'
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'note',
    resolvePath: '/note/'
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'springboot',
    resolvePath: '/springboot/'
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'springboot/30.3x版本',
    resolvePath: '/springboot/30.3x版本/'
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'springboot/30.3x版本',
    resolvePath: '/springboot/40.4x版本/'
  },
]

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
