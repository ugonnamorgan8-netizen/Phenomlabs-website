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
        'ph-space': '#050510',
        'ph-card': '#0A0A1A',
        'ph-blue': '#0066FF',
        'ph-purple': '#6600FF',
        'ph-gold': '#FFB800',
        'ph-text': '#FFFFFF',
        'ph-muted': '#A0A0B0',
        'ph-border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-ph': 'linear-gradient(135deg, #0066FF, #6600FF)',
        'gradient-ph-gold': 'linear-gradient(135deg, #FFB800, #FF6600)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,102,255,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0,102,255,0.8)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
