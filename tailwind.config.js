/** Config Tailwind STATICA — replica la config inline che prima stava nel CDN.
 *  Compilata con Tailwind CLI in assets/tailwind.css (niente più CDN runtime). */
module.exports = {
  content: ['./index.html'],
  // Classi aggiunte/rimosse via JS a runtime: le metto in safelist così non
  // vengono eliminate dalla purga.
  safelist: ['text-navy', 'text-white', 'hidden', 'open', 'scrolled'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        tech: '#1D4ED8',
        'tech-light': '#3B82F6',
        eco: '#10B981',
        'eco-dark': '#059669',
        slate50: '#F8FAFC',
        slate100: '#F1F5F9',
        slate400: '#94A3B8',
        slate600: '#475569',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif'],
      },
    },
  },
};
