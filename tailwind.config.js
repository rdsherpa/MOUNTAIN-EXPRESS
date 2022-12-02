/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('./public/assets/images/pexels-sean-m-4279629.jpg')",
      },
    },
  },
};
