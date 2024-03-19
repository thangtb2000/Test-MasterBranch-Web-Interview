/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                light_blue: "#5684AE",
                dark_blue: "#0F4C81",
                light_orange: "#FFE4C8",
                dark_orange: "#F9BE81",
                calendar_tile: "#E4F6ED",
            },

            fontFamily: {
                sans: ["OpenSans"],
            },
            gridTemplateColumnsetTemplate: {
                "1/5": "1fr 5fr",
            },
        },
    },
    plugins: [], //[require("@tailwindcss/forms")]
};
