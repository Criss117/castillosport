/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/assets/heros/SOMOS-EL-ALIADO-QUE-NECECITA-TU-CUERPO-ecommerce-1-1024x577.webp')",
        "pexels-photo": "url('/assets/pexels-photo.webp')",
        "shop-image":
          "url('/assets/suplementos-deportivos-Conoce-los-mitos-y-verdades.webp')",
      },
      colors: {
        primary: "#f75806",
        secondary: "#030000",
        accent: "#3a3a3a",
        bgsecondary: "#f8f6f3",
      },
    },
  },
  plugins: [],
};
