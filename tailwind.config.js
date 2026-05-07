/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ph-black': '#000000',
        'ph-space': '#0a0a0a',
        'ph-card': '#111111',
        'ph-purple': '#7c3aed',
        'ph-purple-dark': '#4c1d95',
        'ph-purple-light': '#a78bfa',
        'ph-violet': '#8b5cf6',
        // Legacy aliases (keep so old code doesn't break)
        'ph-blue': '#7c3aed',
        'ph-gold': '#e2e8f0',
        'ph-text': '#FFFFFF',
        'ph-muted': '#94a3b8',
        'ph-border': 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        'display': ['Sora', 'sans-serif'],
        'sans': ['DM Sans', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-ph': 'linear-gradient(135deg, #7c3aed, #6d28d9)',
        'gradient-brand': 'linear-gradient(135deg, #a78bfa, #7c3aed)',
        'gradient-ph-gold': 'linear-gradient(135deg, #e2e8f0, #94a3b8)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(124,58,237,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(124,58,237,0.7)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
