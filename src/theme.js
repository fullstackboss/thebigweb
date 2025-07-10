// Configuración de tema en blanco y negro
// Modo claro por defecto

export const theme = {
  light: {
    primary: '#000000',
    secondary: '#333333',
    accent: '#666666',
    background: '#ffffff',
    surface: '#f8f8f8',
    card: '#ffffff',
    text: '#000000',
    textSecondary: '#333333',
    textMuted: '#666666',
    border: '#e0e0e0',
    borderLight: '#f0f0f0',
    hover: '#f5f5f5',
    active: '#e8e8e8',
    disabled: '#cccccc',
    success: '#000000',
    error: '#000000',
    warning: '#333333',
    info: '#666666',
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowDark: 'rgba(0, 0, 0, 0.2)',
  },
  dark: {
    primary: '#ffffff',
    secondary: '#cccccc',
    accent: '#999999',
    background: '#000000', // rojo para comprobar
    surface: '#111111',
    card: '#1a1a1a',
    text: '#ffffff',
    textSecondary: '#cccccc',
    textMuted: '#999999',
    border: '#333333',
    borderLight: '#222222',
    hover: '#1a1a1a',
    active: '#222222',
    disabled: '#444444',
    success: '#ffffff',
    error: '#ffffff',
    warning: '#cccccc',
    info: '#999999',
    shadow: 'rgba(255, 255, 255, 0.1)',
    shadowDark: 'rgba(255, 255, 255, 0.2)',
  }
}

function setCSSVariables(themeObj) {
  for (const [key, value] of Object.entries(themeObj)) {
    document.documentElement.style.setProperty(`--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`, value)
  }
}

export const getCurrentTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  return savedTheme === 'dark' ? 'dark' : 'light'
}

export const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName)
  document.documentElement.setAttribute('data-theme', themeName)
  setCSSVariables(theme[themeName])
}

export const initializeTheme = () => {
  const currentTheme = getCurrentTheme()
  setTheme(currentTheme)
} 