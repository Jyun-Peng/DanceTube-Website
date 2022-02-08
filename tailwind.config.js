module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        colors: {
            black: '#333333',
            gray: '#545454',
            white: '#efefef',
            main: '#D355FF',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
        fontSize: {
            sm: ['0.875rem', '1'],
            lg: ['1.125rem', '1'],
            xl: ['1.25rem', '1'],
        },
    },
    plugins: [],
};
