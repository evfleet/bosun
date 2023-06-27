/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: generateScale("gray"),
      },
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
