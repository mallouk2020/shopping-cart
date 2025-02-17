/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // تأكد من تضمين جميع الملفات التي تستخدم Tailwind

      './index.html',  // إضافة ملفات HTML في مجلد public
   
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}