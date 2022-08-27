module.exports = {
    mode: 'jit',
    content: ['./layouts/**/*.html'],
    theme: {
        screens: {
            'sm': '672px'
        },
        fontFamily: {
            sans: [
                'Raleway',
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
