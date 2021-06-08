let mix = require("laravel-mix");

mix.js("src/app.js", "public/js");
mix.sass("src/scss/app.scss", "public/css");
console.log("test")
mix.js("src/swiper.js", "public/js");