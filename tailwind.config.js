module.exports = {
  // content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#861C42',
          DEFAULT: '#ff3838',
        },
        inactive: {
          dark: 'rgba(212, 212, 212, 0.4)',
        },
      },
      screens: {
        xs: { max: '639px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  // plugins: [],
};
