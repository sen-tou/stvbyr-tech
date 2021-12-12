module.exports = {
    // mode: 'jit', // enable when hugo supports this feature
    darkMode: 'media',
    content: ['./layouts/**/*.html'],
    theme: {
        screens: {
            'sm': '672px'
        },
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
                'Georgia',
                'Cambria',
                'Times New Roman',
                'Times',
                'serif',
            ],
            mono: [
                'Cascadia Code PL',
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace'
            ]
        },
    },
};
