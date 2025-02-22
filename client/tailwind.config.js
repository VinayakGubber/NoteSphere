/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        heightWithoutNavbar: "calc(100vh - 80px)",
      },
      backgroundImage: {
        unsplashBgImage: "url('/img/bgImg.jpg')",
        notesImage:
          "linear-gradient(to right, rgb(252, 53, 76), rgb(10, 191, 188))",
        // Ember Orange → Deep Orange → Brown → Charcoal Black
      },
    },
  },
  plugins: [],
};
