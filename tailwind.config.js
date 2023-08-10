/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-noto-serif)'],
        sans: ['var(--font-inter)'],
      },
      keyframes: {
        fadeInAndScale: {
          from: { opacity: 0, transform: 'scale(0.7)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        overlayHide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        sidebarShow: {
          from: { opacity: 0, transform: 'translateX(-100%)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        sidebarHide: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-100%)' },
        },
      },
    },
    animation: {
      fadeInAndScale: 'fadeInAndScale 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      overlayShow: 'overlayShow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      overlayHide: 'overlayHide 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      sidebarShow: 'sidebarShow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      sidebarHide: 'sidebarHide 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
