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
      { text: '指南', link: '/' },
      {
        text: '资源',
        items: [
          { text: '3.x', link: '/springboot/30.3x版本/' },
          { text: '4.x', link: '/springboot/40.4x版本/' }
        ]
      },
      {
        text: 'Spring Boot',
        items: [
          { text: '3.x', link: '/springboot/30.3x版本/' },
          { text: '4.x', link: '/springboot/40.4x版本/' }
        ]
      },
      {
        text: '笔记',
        items: [
          { text: 'Maven', link: '/note/maven/' },
          { text: 'Nodejs', link: '/note/nodejs/' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019 Li Gen'
    }
  }
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
  {
    documentRootPath: '/docs',
    scanStartPath: 'note/maven',
    resolvePath: '/note/maven/'
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'note/nodejs',
    resolvePath: '/note/nodejs/'
  }
]

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
