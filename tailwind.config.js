module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.vue',
        '*.vue',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gr': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
                'orange-gr': 'linear-gradient(135deg, #ffb499 0%, #ff8f66 100%)',
            },
            colors: {
                'color-1': '#FF0000',
                'color-2': '#FFD200',
                'color-4': '#757575',
                'color-6': '#F9F9F9',
                'color-7': '#2C323A',
                'color-8': '#8F8F8F',
            },
            fontFamily: {
                'onest': ['Onest', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
