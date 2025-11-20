import {defineConfig} from 'vitepress'
import {withSidebar} from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = ({
    title: "Li Gen 的小站",
    description: "为了希尔瓦娜斯的荣耀！！！",
    head: [
        [
            'link',
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        [
            'link',
            { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' }
        ],
        [
            'link',
            { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }
        ],
    ],
    lang: 'zh-CN',
    // 不会因为死链而导致构建失败。
    ignoreDeadLinks: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: 'Spring Boot', link: '/springboot/'},
            {text: '笔记', link: '/note/'},
            {
                text: '资源',
                items: [
                    {text: 'OpenJdk下载', link: 'https://adoptium.net/zh-CN/temurin/releases'},
                ]
            },
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        search: {
            provider: 'local'
        },
        outline: {
            label: '页面导航'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019 LiGen的小站'
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
