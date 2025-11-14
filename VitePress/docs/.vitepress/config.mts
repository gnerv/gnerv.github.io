import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gnerv | Li Gen",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Spring Boot', link: '/SpringBoot' },
      {
        text: 'Spring Boot',
        items: [
          { text: 'SpringBoot 3.x', link: '/SpringBoot/3.x/' },
          { text: 'SpringBoot 4.x', link: '/SpringBoot/4.x/' }
        ]
      },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/SpringBoot/': [
        {
          text: 'SpringBoot',
          items: [
            { text: '3.x', link: '/SpringBoot/3.x/' },
            { text: '4.x', link: '/SpringBoot/4.x/' }
          ]
        }
      ],
      '/SpringBoot/3.x/': [
        {
          text: 'SpringBoot 3.x',
          items: [
            { text: '简介', link: '/SpringBoot/3.x/' },
            { text: '1-创建项目', link: '/SpringBoot/3.x/1-创建项目' },
            { text: '2-接口开发', link: '/SpringBoot/3.x/2-接口开发' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
