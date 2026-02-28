/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gh-bg': '#0d1117',
        'gh-surface': '#161b22',
        'gh-border': '#30363d',
        'gh-text': '#e6edf3',
        'gh-muted': '#7d8590',
        'gh-cyan': '#00d9ff',
        'gh-blue': '#58a6ff',
        'gh-green': '#39d353',
        'gh-purple': '#bc8cff',
        'gh-orange': '#ffa657',
        'gh-red': '#ff7b72',
        'neon-cyan': '#00ffff',
        'neon-blue': '#0080ff',
      },
      fontFamily: {
        'mono': ['"Share Tech Mono"', 'monospace'],
        'display': ['"Orbitron"', 'monospace'],
        'body': ['"Rajdhani"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
        'cursor-blink': 'blink 1s step-end infinite',
        'slide-in-left': 'slideInLeft 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.6s ease forwards',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
        'glitch': 'glitch 3s infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 40px #00d9ff' },
          'to': { textShadow: '0 0 20px #00d9ff, 0 0 40px #00d9ff, 0 0 80px #00d9ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '96%': { transform: 'translate(-1px, 2px)' },
          '98%': { transform: 'translate(1px, -2px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px)`,
        'gh-gradient': 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)',
        'neon-gradient': 'linear-gradient(90deg, #00d9ff, #58a6ff, #bc8cff)',
        'card-gradient': 'linear-gradient(135deg, rgba(22,27,34,0.9) 0%, rgba(13,17,23,0.95) 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 217, 255, 0.5), 0 0 30px rgba(0, 217, 255, 0.2)',
        'neon-blue': '0 0 15px rgba(88, 166, 255, 0.5), 0 0 30px rgba(88, 166, 255, 0.2)',
        'neon-green': '0 0 15px rgba(57, 211, 83, 0.5), 0 0 30px rgba(57, 211, 83, 0.2)',
        'card': '0 0 0 1px rgba(48,54,61,0.8), 0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(0,217,255,0.4), 0 8px 32px rgba(0,217,255,0.1)',
      },
    },
  },
  plugins: [],
}
