/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5f9',
          100: '#d5e7f1',
          200: '#b0d1e4',
          300: '#8cbbd6',
          400: '#72a4bd', // Brand primary color
          500: '#5a8ca6',
          600: '#477189',
          700: '#365465',
          800: '#243644',
          900: '#121b22',
        },
        secondary: {
          50: '#fef9e7',
          100: '#fdf4cf',
          200: '#fbe99f',
          300: '#f9de6f',
          400: '#f7d33f',
          500: '#f2d091', // Brand secondary color (mellow yellow)
          600: '#c1a673',
          700: '#907d56',
          800: '#605438',
          900: '#302a1c',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'bounce-slow': 'bounceSlow 2s infinite',
        'gradient': 'gradientBG 6s ease infinite',
        'wobble-strong': 'wobbleStrong 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientBG: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        wobbleStrong: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
