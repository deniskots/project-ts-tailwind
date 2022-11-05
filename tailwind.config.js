/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                josefin: ['Josefin Sans', 'sans-serif']
            },
            colors: {
                theme: {
                    red: 'rgba(227,67,80,0.84)',
                    white: 'rgba(255,253,253,0.97)',
                    black: 'rgba(58,56,56,0.97)'
                },
            },
        },
    },
    plugins: [],
}
