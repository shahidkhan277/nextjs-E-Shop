import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5E3C', // Brownish tone
        primaryLight: '#D9B89C', // Lighter brownish tone
        secondary: '#C28766', // Soft matching shade
        secondaryLight: '#E6D4C3', // Lighter complementary tone
        lightGray: '#F5F1ED', // Warm light gray
        darkGray: '#5C5149', // Darker brownish-gray
      },
    },
  },
  plugins: [],
} satisfies Config;
