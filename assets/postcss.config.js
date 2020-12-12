const themeDir = __dirname + '/../';

module.exports = {
    plugins: [
        require('postcss-import')({ path: [themeDir] }),
        require('tailwindcss')(themeDir + 'assets/tailwind.config.js'),
        require('autoprefixer')(),
    ]
};