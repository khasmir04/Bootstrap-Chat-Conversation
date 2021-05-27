let mix = require("laravel-mix");

mix.js("src/app.js", "public/js").sass("src/scss/app.scss", "public/css");
