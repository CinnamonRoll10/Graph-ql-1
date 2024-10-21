// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Includes all components and pages in 'app'
    './src/app/components/**/*.{js,ts,jsx,tsx}', // Specifically includes all files in the 'components' folder
    './src/app/lib/**/*.{js,ts,jsx,tsx}', // If you're using Tailwind in lib files
    './src/app/layout.tsx', // Include the layout file
    './src/app/page.tsx', // Include the page file
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, etc. here if needed
    },
  },
  plugins: [],
};
