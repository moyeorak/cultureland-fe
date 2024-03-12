import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "user-theme": {
          "10": "#F0ECFD",
          "20": "#E1D9FC",
          "30": "#D2C6FA",
          "40": "#C3B3F9",
          "50": "#B3A0F7",
          "60": "#A48EF5",
          "70": "#957BF4",
          "80": "#8668F2",
          "90": "#7755F1",
          "100": "#6842EF",
        },
        "partner-theme": {
          "50": "#color",
          "100": "#color",
          // ...
          "900": "#color",
        },
        neutral: {
          "5": "#F3F3F3",
          "10": "#E6E6E6",
          "20": "#CCCCCC",
          "30": "#B3B3B3",
          "40": "#999999",
          "50": "#808080",
          "60": "#666666",
          "70": "#4D4D4D",
          "80": "#333333",
          "90": "#1A1A1A",
          "100": "#030303",
        },
        "font-primary-90": "#1A1A1A",
        "font-70": "#4D4D4D",
        "font-point-90": "#196AFF",
        "font-40": "#999999",
        "font-white": "#FFFFFF",
        "font-warning": "#FA3131",
      },
      fontSize: {
        "fs-32": "32px",
        "fs-28": "28px",
        "fs-20": "20px",
        "fs-16": "16px",
        "fs-14": "14px",
        "fs-12": "12px",
        "H1-B-28": [
          "28px",
          {
            fontWeight: "700",
          },
        ],
      },
      boxShadow: {
        primary: "0 4px 16px 0 rgba(134, 104, 242, 0.14)",
      },
    },
  },
  variants: {
    extend: {
      display: ["peer-checked"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
