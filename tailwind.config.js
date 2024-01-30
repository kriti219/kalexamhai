/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "iris-100": "#5d5fef",
        "blue-gray-50": "#fbfbfb",
        "grey-01": "#f7f9fb",
        "grey-03": "#e2e6ea",
        "grey-05": "#242634",
        gainsboro: "#d9d9d9",
        black: "#313144",
        "blues-gray2": "#b8bbc2",
        black1: "#000",
      },
      spacing: {},
      fontFamily: {
        "label-small": "Inter",
        "sf-pro-display": "'SF Pro Display'",
        "drop-menu-menu": "Poppins",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
