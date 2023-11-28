/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/**/*.{js,jsx,ts,tsx}", "./src/**/**/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                "1/10": "10%",
                "2/10": "20%",
                "3/10": "30%",
                "4/10": "40%",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
