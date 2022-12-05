/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/homepage.handlebars", "./views/layouts/main.handlebars", "./views/booking.handlebars", "./views/login.handlebars", "*.{html,handlebars,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('./public/assets/images/pexels-sean-m-4279629.jpg')",
      },
    },
  },
};
