import { createTheme } from '@mui/material/styles';
import { darkTheme } from './dark';
import { lightTheme } from './light';

const typography = {
  fontSize: 16, // Base font size (default is 14px)
  h1: {
    fontSize: '2.5rem', // Customize heading sizes
  },
  h2: {
    fontSize: '2rem',
  },
  body1: {
    fontSize: '1.25rem', // Customize body text size
  },
  body2: {
    fontSize: '1.1rem',
  },
  button: {
    fontSize: '1rem', // Customize button text size
  },
};

// Create Material UI Light Theme using custom light theme colors
export const muiLightTheme = createTheme({
  ...lightTheme,
  palette: {
    mode: 'light',
    primary: {
      main: lightTheme.colors.primary,
      contrastText: lightTheme.colors.onPrimary,
    },
    secondary: {
      main: lightTheme.colors.secondary,
      contrastText: lightTheme.colors.onSecondary,
    },
    background: {
      default: lightTheme.colors.background,
      paper: lightTheme.colors.surface,
    },
    text: {
      primary: lightTheme.colors.onBackground,
      secondary: lightTheme.colors.onSurface,
    },
  },
  typography,
});

// Create Material UI Dark Theme using custom dark theme colors
export const muiDarkTheme = createTheme({
  ...darkTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: darkTheme.colors.primary,
      contrastText: darkTheme.colors.onPrimary,
    },
    secondary: {
      main: darkTheme.colors.secondary,
      contrastText: darkTheme.colors.onSecondary,
    },
    background: {
      default: darkTheme.colors.background,
      paper: darkTheme.colors.surface,
    },
    text: {
      primary: darkTheme.colors.onBackground,
      secondary: darkTheme.colors.onSurface,
    },
  },
  typography,
});
