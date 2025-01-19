import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Frontend-Q',
    srcDir: 'src',
    description: 'A VitePress Site',
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
    },
});
