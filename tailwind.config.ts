import type { Config } from 'tailwindcss';
import { DM_Sans } from 'next/font/google';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/starrynight1.png')",
      },
    },
  },
  plugins: [],
}
export default config
