module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Custom dark mode colors
                dark: {
                  bg: '#121212', // Pure dark gray instead of blue-tinted dark
                  card: '#1e1e1e',
                    text: '#f5f5f5',
                }
            },
            fontFamily: {
                custom: ["Times New Roman", "sans-serif"],
            },
            textOpacity: {
                10: "0.1",
                20: "0.2",
                30: "0.3",
                40: "0.4",
                50: "0.5",
                60: "0.6",
                70: "0.7",
                80: "0.8",
                90: "0.9",
            },
        },
    },
    plugins: [],
};
