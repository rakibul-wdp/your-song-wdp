import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      screens: {
        "1024px": "1024px",
        "1320px": "1320px",
        "1440px": "1440px",
        "1600px": "1600px",
        "1700px": "1700px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        backgroundImage: {
          linear: "linear-gradient(90deg, #F6A23D 0%, #EC5934 100%)",
        },
        primary: {
          coral: "#E1574B",
          green: "#4F9B8F",
          yellow: "#E4C477",
        },
        secondary: {
          white: "#FCFCFD",
          orange: "#E9A56C",
          charcoal: "#353945",
          gray: "#23262F",
          black: "#141416",
        },
        accent: {
          DEFAULT: "#FBDBD1",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
