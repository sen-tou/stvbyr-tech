const themeDir = __dirname + '/../';

module.exports = {
    purge: {
        content: [
            themeDir + 'layouts/**/*.html',
        ],
    },
    theme: {
        fontFamily: {
            sans: [
                'Poppins',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Open Sans',
                'sans-serif',
            ],
            serif: [
                'PT Serif',
                'Georgia',
                'Cambria',
                'Times New Roman',
                'Times',
                'serif',
            ],
            mono: [
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace'
            ]
        },
    },
    darkMode: 'media',
    variants: {},
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ]
};
