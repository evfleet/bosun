/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: generateScale("blue"),
      gray: generateScale("gray"),
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
  },
  plugins: [],
};

// Inspired from https://fynn.at/shorts/2023-03-19-how-to-use-radix-colors-with-tailwind-css
// Fixed breaking changes from 1.0.0 release
function generateScale(name) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}
