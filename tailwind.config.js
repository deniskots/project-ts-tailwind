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
                    black: 'rgba(72,71,71,0.97)',
                    grey: 'rgba(175,145,145,0.97)',
                    tagBg: 'rgba(192,192,192,0.97)',
                    tagItemBg: 'rgba(124,124,124,0.97)',
                    profileBanner: 'rgba(160,162,155,0.97)',
                },
            },
        },
    },
    plugins: [],
}
