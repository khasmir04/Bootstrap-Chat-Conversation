let mix = require("laravel-mix");

mix.js("src/app.js", "public/js");
mix.sass("src/scss/app.scss", "public/css");
mix.js("src/swiper.js","public/js");