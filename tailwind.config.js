/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#555",
        border: "#ccc",
        focus: "#007bff",
        aliceblue: "#dcedffff",
        powderblue: "#94b0daff",
        davysgray: "#5c5d67ff",
        emerald: "#5fdd9dff",
        seagreen: "#499167ff",
      },
    },
  },
  plugins: [],
};
