/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#0a0a14',
                card: '#161622',
                border: '#2e2e42',
                primary: '#0ea5e9', // For Azure/Power Platform theme
                secondary: '#6366f1',
                accent: '#8b5cf6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
