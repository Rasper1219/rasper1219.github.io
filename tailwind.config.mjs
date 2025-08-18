/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#9FE870', // placeholder accent; change later
        }
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace']
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
