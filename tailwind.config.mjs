/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        boxing: ['Boxing', 'sans-seriff'],
        'boxing-striped': ['Boxing Striped', 'sans-seriff'],
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
