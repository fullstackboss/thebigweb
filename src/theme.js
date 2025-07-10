// Configuración de tema en blanco y negro
// Modo claro por defecto

export const theme = {
  light: {
    // Colores principales
    primary: '#000000',
    secondary: '#333333',
    accent: '#666666',
    
    // Colores de fondo
    background: '#ffffff',
    surface: '#f8f8f8',
    card: '#ffffff',
    
    // Colores de texto
    text: '#000000',
    textSecondary: '#333333',
    textMuted: '#666666',
    
    // Colores de borde
    border: '#e0e0e0',
    borderLight: '#f0f0f0',
    
    // Estados
    hover: '#f5f5f5',
    active: '#e8e8e8',
    disabled: '#cccccc',
    
    // Feedback
    success: '#000000',
    error: '#000000',
    warning: '#333333',
    info: '#666666',
    
    // Sombras
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowDark: 'rgba(0, 0, 0, 0.2)',
  },
  
  dark: {
    // Colores principales
    primary: '#ffffff',
    secondary: '#cccccc',
    accent: '#999999',
    
    // Colores de fondo
    background: '#000000',
    surface: '#111111',
    card: '#1a1a1a',
    
    // Colores de texto
    text: '#ffffff',
    textSecondary: '#cccccc',
    textMuted: '#999999',
    
    // Colores de borde
    border: '#333333',
    borderLight: '#222222',
    
    // Estados
    hover: '#1a1a1a',
    active: '#222222',
    disabled: '#444444',
    
    // Feedback
    success: '#ffffff',
    error: '#ffffff',
    warning: '#cccccc',
    info: '#999999',
    
    // Sombras
    shadow: 'rgba(255, 255, 255, 0.1)',
    shadowDark: 'rgba(255, 255, 255, 0.2)',
  }
}

// Función para obtener el tema actual
export const getCurrentTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  return savedTheme === 'dark' ? 'dark' : 'light'
}

// Función para cambiar el tema
export const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName)
  document.documentElement.setAttribute('data-theme', themeName)
}

// Función para obtener un color específico del tema actual
export const getColor = (colorName) => {
  const currentTheme = getCurrentTheme()
  return theme[currentTheme][colorName]
}

// Función para obtener todos los colores del tema actual
export const getCurrentThemeColors = () => {
  const currentTheme = getCurrentTheme()
  return theme[currentTheme]
}

// Inicializar tema al cargar
export const initializeTheme = () => {
  const currentTheme = getCurrentTheme()
  setTheme(currentTheme)
}

// Exportar CSS variables para usar en Tailwind
export const getThemeCSSVariables = () => {
  const currentTheme = getCurrentTheme()
  const colors = theme[currentTheme]
  
  return {
    '--color-primary': colors.primary,
    '--color-secondary': colors.secondary,
    '--color-accent': colors.accent,
    '--color-background': colors.background,
    '--color-surface': colors.surface,
    '--color-card': colors.card,
    '--color-text': colors.text,
    '--color-text-secondary': colors.textSecondary,
    '--color-text-muted': colors.textMuted,
    '--color-border': colors.border,
    '--color-border-light': colors.borderLight,
    '--color-hover': colors.hover,
    '--color-active': colors.active,
    '--color-disabled': colors.disabled,
    '--color-success': colors.success,
    '--color-error': colors.error,
    '--color-warning': colors.warning,
    '--color-info': colors.info,
    '--color-shadow': colors.shadow,
    '--color-shadow-dark': colors.shadowDark,
  }
} 