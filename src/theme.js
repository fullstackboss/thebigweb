// Configuración de tema en blanco y negro
// Modo claro por defecto

export const theme = {
  light: {
    primary:'#030617', //level1
    oscuro:'#1E293B',//level2
    mediooscuro:'#324154',//level3
    medio:'#516072',//level4
    medioclaro:'#A5B5C7',//level5
    claro:'#E4EAF2',//level6
    suave:'#F4F7FB',//level6

    background:'#FFFFFF',
    textooscuro:'#030617',
    textoresalta:'#030617',
    textomedio:'#516072',
    border:'#030617',
    shadow:'#516072',
    neutro:'#FFFFFF',
    antineutro:'#000000',
    test:'#f00', 
  },
  dark: {
    primary:'#A5B5C7',//level1
    oscuro:'#1E293B',//level2
    mediooscuro:'#324154',//level3
    medio:'#516072',//level4
    medioclaro:'#A5B5C7',//level5
    claro:'#E4EAF2',//level6
    suave:'#1E293B',//level6

    background:'#030617',
    textooscuro:'#E4EAF2',
    textoresalta:'#FFFFFF',
    textomedio:'#A5B5C7',
    border:'#324154',
    shadow:'#516072', 
    neutro:'#000000',
    antineutro:'#FFFFFF',
    test:'#00f', 
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