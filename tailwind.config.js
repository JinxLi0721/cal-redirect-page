/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // 確保涵蓋所有 Vue 和 JS/TS 檔案
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A7F3D0', // 柔和綠色，代表放鬆
        background: '#F5F5F4', // 暖白背景
        text: '#4B5563', // 深灰文字
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'], // 繁體中文圓潤字體
      },
    },
  },
  plugins: [],
}
