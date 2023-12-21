/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/**/*.{js,jsx,ts,tsx}", "./src/**/**/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            maxWidth: {
                "1/10": "10%",
                "2/10": "20%",
                "3/10": "30%",
                "4/10": "40%",
            },
            borderRadius: {
                "3xs": "10px",
                "12xs": "1px",
                "21xl": "40px",
                "8xs": "5px",
              },
              fontSize: {
                xl: "20px",
                mini: "15px",
                "6xl": "25px",
                "3xs": "10px",
                xs: "12px",
                inherit: "inherit",
              },
        },
    },
    plugins: [require("flowbite/plugin")],
};
