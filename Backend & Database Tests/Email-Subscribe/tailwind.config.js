// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: [
        './public/*.html',
        './views/*.ejs',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif',]
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    }
}