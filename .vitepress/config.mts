import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Frontend Interview Question',
    srcDir: 'src',
    description: 'Frontend Interview Question',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/icons/logo.svg' }]],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Vue', link: '/vue/' },
            { text: 'TS', link: '/ts/' },
            { text: 'JS', link: '/js/' },
        ],

        sidebar: {
            '/vue/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Index', link: '/guide/' },
                        { text: 'One', link: '/guide/one' },
                        { text: 'Two', link: '/guide/two' },
                    ],
                },
            ],
            '/ts/': [
                {
                    text: 'TS',
                    items: [
                        { text: 'Index', link: '/guide/' },
                        { text: 'One', link: '/guide/one' },
                        { text: 'Two', link: '/guide/two' },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025',
        },
    },
});
