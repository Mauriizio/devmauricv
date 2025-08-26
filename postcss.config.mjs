// postcss.config.mjs
export default {
  plugins: {
    "postcss-nesting": {}, // nesting primero
    tailwindcss: {},       // Tailwind v3.x
    autoprefixer: {},      // Autoprefixer
  },
};
