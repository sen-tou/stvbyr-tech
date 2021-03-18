module.exports = {
    purge: {
        content: [
            __dirname + '/../layouts/**/*.html',
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
                'Lora',
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
