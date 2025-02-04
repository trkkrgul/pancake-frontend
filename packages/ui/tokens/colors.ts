export const baseColors = {
  white: 'white',
  failure: '##ff537b',
  failure33: '##ff537b33',
  primary: '#31cb9e',
  primary0f: '#31cb9e0f',
  primary3D: '#31cb9e3D',
  primaryBright: '#53DEE9',
  primaryDark: '#0098A1',
  success: '#31D0AA',
  success19: '#31D0AA19',
  warning: '#FFB237',
  warning2D: '#ED4B9E2D',
  warning33: '#ED4B9E33',
}

export const additionalColors = {
  binance: '#F0B90B',
  overlay: '#452a7a',
  gold: '#FFC700',
  silver: '#B2B2B2',
  bronze: '#E7974D',
}

export const lightColors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#31cb9e',
  secondary80: '#31cb9e80',
  background: '#FAF9FA',
  backgroundDisabled: '#E9EAEB',
  backgroundAlt: '#FFFFFF',
  backgroundAlt2: 'rgba(255, 255, 255, 0.7)',
  cardBorder: '#E7E3EB',
  contrast: '#191326',
  dropdown: '#F6F6F6',
  dropdownDeep: '#EEEEEE',
  invertedContrast: '#FFFFFF',
  input: '#f5f5f5',
  inputSecondary: '#d7caec',
  tertiary: '#EFF4F5',
  text: '#280D5F',
  text99: '#280D5F99',
  textDisabled: '#BDC2C4',
  textSubtle: '#7A6EAA',
  disabled: '#E9EAEB',
  gradientBubblegum: '#f5f5f5',
  gradientInverseBubblegum: 'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)',
  gradientCardHeader: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
  gradientBlue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
  gradientViolet: 'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
  gradientVioletAlt: 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)',
  gradientGold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  gradientBold: 'linear-gradient(#53DEE9, #7645D9)',
}

export const darkColors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#31cb9e',
  secondary80: '#31cb9e80',
  background: '#08060B',
  backgroundDisabled: '#2c4643',
  backgroundAlt: 'rgb(14, 23, 32)',
  backgroundAlt2: 'rgba(39, 38, 44, 0.7)',
  cardBorder: '#00000000',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: 'rgb(8, 15, 22)',
  input: '#080f16',
  inputSecondary: '#262130',
  primaryDark: '#0098A1',
  tertiary: '#e3e3e350',
  text: '#F4EEFF',
  text99: '#F4EEFF99',
  textDisabled: '#e3e3e360',
  textSubtle: '#e3e3e3',
  disabled: '#2c4643',
  gradientBubblegum: 'rgb(8, 15, 22)',
  gradientInverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
  gradientCardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
  gradientBlue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
  gradientViolet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
  gradientVioletAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
  gradientGold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  gradientBold: 'linear-gradient(#53DEE9, #9A6AFF)',
}
