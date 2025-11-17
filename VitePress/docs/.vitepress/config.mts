import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "Gnerv | Li Gen",
  description: "A VitePress Site",
  lang: 'zh-CN',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Spring Boot', link: '/springboot' },
      {
        text: 'Spring Boot',
        items: [
          { text: 'SpringBoot 3.x', link: '/springboot/3.x/' },
          { text: 'SpringBoot 4.x', link: '/springboot/4.x/' }
        ]
      },
      {
        text: '笔记',
        items: [
          {text: 'Maven', link: '/note/maven'},
          {text: 'Nodejs', link: '/note/nodejs'}
        ]
      },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/springboot/': [
        {
          text: 'SpringBoot',
          items: [
            { text: '3.x', link: '/springboot/3.x/' },
            { text: '4.x', link: '/springboot/4.x/' }
          ]
        }
      ],
      '/springboot/3.x/': [
        {
          text: 'SpringBoot 3.x',
          items: [
            { text: '0-简介', link: '/springboot/3.x/' },
            { text: '1-创建项目', link: '/springboot/3.x/1-创建项目' },
            { text: '2-接口开发', link: '/springboot/3.x/2-接口开发' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ]
    },
    outline: {
      label: "页面导航"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}

const vitePressSidebarOptions = [
    {
      documentRootPath: 'docs',
      scanStartPath: 'guide',
      basePath: '/guide/',
      resolvePath: '/guide/',
      useTitleFromFileHeading: true
    },
    {
      documentRootPath: 'docs',
      scanStartPath: '/note/maven',
      resolvePath: '/',
      useTitleFromFrontmatter: true
    }
  ]

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));