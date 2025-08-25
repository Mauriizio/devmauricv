// postcss.config.mjs
import tailwindcss from "@tailwindcss/postcss"
import nesting from "postcss-nesting"

export default {
  plugins: [
    nesting(),      // CSS Nesting (debe ir antes)
    tailwindcss(),  // Tailwind
  ],
}
