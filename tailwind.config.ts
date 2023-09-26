import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",

      primary: "#F02D3A",
      secondary: "#273043",
      tertiary: "#9197AE",
      background: "#eeff6ee",
      levanta: "#308042",

      // gray 1-14
      "gray-0": "#FFFFFF",
      "gray-1": "#FAFAFB",
      "gray-2": "#F1F1F5",
      "gray-3": "#E2E2EA",
      "gray-4": "#D5D5DC",
      "gray-5": "#B5B5BE",
      "gray-6": "#92929D",
      "gray-7": "#8B8B96",
      "gray-8": "#696974",
      "gray-9": "#63636E",
      "gray-10": "#4F4F5A",
      "gray-11": "#44444F",
      "gray-12": "#292932",
      "gray-13": "#1C1C24",
      "gray-14": "#13131A",
      font: {
        heading: "#0E1429",
        body: "#434A64",
        "sub-body": "#878D9F",
        muted: "#C2C6D0",
      },
      //gray: [''].concat(Object.values(radixColors.slate)),

      /** colors from shaks figma */
      green: "#04C200",
      mint: "#3DD598",
      red: "#FC5A5A",
      purple: "#A461D8",
      pink: "#FF9AD5",
      orange: "#FF974A",
      gold: "#FFC542",
      "gold-text": "#f1a700",
      blue: "#50B5FF",
    },
  },
  plugins: [],
} satisfies Config;
