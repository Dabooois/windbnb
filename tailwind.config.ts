import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        extend: {
            fontSize: {
                '14': '14px',
                '12': '12px',
            },
            colors: {
                primary: 'rgba(235, 87, 87, 0.90)',
            },
            fontWeight: {
                500: '500',
            },
        },
    },
    plugins: [],
};
export default config;
