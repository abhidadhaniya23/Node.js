module.exports = {
    mode: 'jit',
    purge: [
        './views/**/*.ejs',
        './views/*.ejs',
        './public/**/*.html',
        './public/*.html'
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif',]
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}