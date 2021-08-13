module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto']
      },
      colors: {
        blue: {
          100: '#3E7EF8',
          200: '#5B77FF',
        },
        golden: {
          100: '#FF7D00',
          200: '#c96402'
        },
        orange: {
          100: '#FF5722',
        },
      },
      text: ['hover'],
    },
  },
  variants: {
    extend: {},
  },
}