/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#0b3994',     // Primary blue CTA buttons
          sidebar: '#f8fafc',  // Off-white background canvas frame
          text: '#0f172a',     // Dark charcoal text color baseline
          slate: '#64748b'     // Secondary table header labels
        }
      }
    },
  },
  plugins: [],
}
