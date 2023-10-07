/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary
        strongCyan: " hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        // Neutral
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
    },
    container: {
      center: true,
      padding: "",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
};
