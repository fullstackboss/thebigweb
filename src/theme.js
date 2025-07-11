// Configuración de tema en blanco y negro
// Modo claro por defecto

export const theme = {
  light: {
    primary: '#1E293B',  // Texto Principal
    secondary: '#FF0000',
    accent: '#0F172A', // color resalta para texto

    btnaccent: '#030617', // color resalta para boton
    btnaccentext: '#ffffff', // color resalta texto para boton

    elborder: '#0F172A', // FONDO General


    background: '#ffffff', // FONDO General
    surface: '#f8f8f8',
    card: '#ffffff',
    text: '#516072', // texto normal
    textSecondary: '#333333',
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
    primary: '#A5B5C7',   // Texto Principal
    secondary: '#FF0000',
    accent: '#FFFFFF', // color resalta para texto

    btnaccent: '#324154', // color resalta para boton
    btnaccentext: '#ffffff', // color resalta texto para boton

    elborder: '#324154', // FONDO General
    
    background: '#030617', // FONDO General
    surface: '#111111',
    card: '#0F172A',
    text: '#A5B5C7',  // texto normal
    textSecondary: '#cccccc',
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