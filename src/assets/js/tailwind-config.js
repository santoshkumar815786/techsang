tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4343f4",
        "primary-dark": "#3232b7",
        "background-light": "#ffffff",
        "background-offset": "#f5f5f8",
        "background-dark": "#101022",
        "background-dark-offset": "#1a1a2e",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)",
        card: "0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)",
      },
    },
  },
};