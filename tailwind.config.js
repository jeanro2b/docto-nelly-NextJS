const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./components/breeze/*.{js,jsx,ts,tsx}', './pages/*.{js,jsx,ts,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
