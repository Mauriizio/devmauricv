// postcss.config.mjs
const postcssConfig = {
  plugins: {
    "postcss-nesting": {}, // nesting primero
    tailwindcss: {},       // Tailwind v3.x
    autoprefixer: {},      // Autoprefixer
  },
};

export default postcssConfig;
