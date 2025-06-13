/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'silkscreen': ['Silkscreen', 'monospace'],
        'barriecito': ['Barriecito', 'serif'],
        'sans': ['Ubuntu', 'sans-serif'], // Set Ubuntu as default sans font
      },
      colors: {
        'brand-dark': '#0F172A',
        'brand-primary': '#6366F1', // Modern indigo
        'brand-coral': '#FF6B6B', // Warm coral
        'brand-teal': '#20D9BA', // Fresh teal
        'brand-purple': '#8B5CF6', // Vibrant purple
        'brand-orange': '#FF8A65', // Soft orange
        'brand-white': '#FFFFFF',
        'brand-gray': '#1F2937',
        'brand-amber': '#ffec4d', // App icon yellow
        'brand-yellow': '#ffec4d', // App icon yellow
        'accent-dark': '#111827',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      perspective: {
        '1000': '1000px',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        bounceGentle: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366F1, #8B5CF6, #FF6B6B)',
        'gradient-accent': 'linear-gradient(135deg, #20D9BA, #FF8A65)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-coral': '0 0 20px rgba(255, 107, 107, 0.3)',
        'glow-teal': '0 0 20px rgba(32, 217, 186, 0.3)',
      },
    },
  },
  plugins: [],
} 