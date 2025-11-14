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
      '/SpringBoot/4.x/': [
        {
          text: 'SpringBoot 4.x',
          items: [
            { text: 'Index', link: '/SpringBoot/' },
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
