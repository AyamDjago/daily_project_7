/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Baris ini penting agar Tailwind membaca isi folder src
    ],
        theme: {
        extend: {},
    },
    plugins: [],
}