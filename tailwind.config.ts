/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const CHASE_COLORS = {
    'chase-blue': {
        '50': '#eff3fe',
        '100': '#e1eafe',
        '200': '#c9d6fc',
        '300': '#a9bbf8',
        '400': '#8697f3',
        '500': '#6974eb',
        '600': '#4d4ede',
        '700': '#403ec4',
        DEFAULT: '#333399',
        '900': '#31337e',
        '950': '#1d1d49',
    },
    'chase-purple': {
        '50': '#faf6fe',
        '100': '#f2ebfc',
        '200': '#e7dafa',
        '300': '#d5bdf5',
        '400': '#bc93ed',
        '500': '#a16ae2',
        '600': '#8b4ad3',
        '700': '#7638b8',
        DEFAULT: '#663399',
        '900': '#522a79',
        '950': '#371358',
    },
}

export default <Partial<Config>> {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        '@formkit/nuxt',
        "./formkit.theme.ts",
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            colors: {
                ...CHASE_COLORS,
            },
        },
    },
    plugins: [
        typography()
    ],
}

