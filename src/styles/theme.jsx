import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  content: {
    primary: '#1B2028',
    secondary: '#EB7530',
    tertiary: '#EB753033',
    'background-card': '#FAFAFA',
    'background-ellips': '#D9D9D9',
  },
  text: {
    navy: '#1B2028',
    gray: '#9099A7',
  },
};

const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Poppins', sans-serif",
};

const theme = extendTheme({
  config,
  colors,
  fonts,
});

export default theme;
