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
        selfcolors: {
          customCream: '#FFF3E3',
          lightCream:"#F9F1E7",
          darkBrown:"#B88E2F"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
