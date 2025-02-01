import { defineConfig } from 'vitepress';
import { ru } from './config/ru';
import { en } from './config/en';

export default defineConfig({
    title: 'Frontend-IQ',
    srcDir: 'docs',
    cleanUrls: true,
    description: 'Frontend Interview Question',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/icons/logo.svg' }]],
    locales: {
        root: {
            label: 'Русский',
            lang: 'ru',
            ...ru,
        },
        en: {
            label: 'English',
            lang: 'en',
            ...en,
        },
    },
});
