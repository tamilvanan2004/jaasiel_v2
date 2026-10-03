import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: '#500088',
  primaryContainer: '#6b21a8',
  onPrimaryContainer: '#d7a8ff',
  inversePrimary: '#dfb7ff',
  secondary: '#006399',
  secondaryContainer: '#7bc2ff',
  onSecondaryContainer: '#004f7b',
  tertiaryFixedDim: '#faba72',
  surface: '#fff7fe',
  surfaceDim: '#e1d7e2',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#fbf0fc',
  surfaceContainer: '#f5ebf6',
  surfaceContainerHigh: '#efe5f1',
  onSurface: '#1f1a22',
  onSurfaceVariant: '#4c4452',
  inverseSurface: '#342e37',
  outline: '#7e7383',
  outlineVariant: '#cfc2d4',
  surfaceVariant: '#e9dfeb',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      light: colors.primaryContainer,
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryContainer,
      contrastText: '#ffffff',
    },
    background: {
      default: colors.surface,
      paper: colors.surfaceContainerLowest,
    },
    text: {
      primary: colors.onSurface,
      secondary: colors.onSurfaceVariant,
    },
    surface: {
      main: colors.surface,
    },
    surfaceContainerLow: {
      main: colors.surfaceContainerLow,
    },
    outline: {
      main: colors.outline,
    },
    outlineVariant: {
      main: colors.outlineVariant,
    },
    surfaceVariant: {
      main: colors.surfaceVariant,
    },
    inversePrimary: {
      main: colors.inversePrimary,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '48px',
      lineHeight: '56px',
      letterSpacing: '-0.02em',
      fontWeight: 700,
    },
    h2: {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '-0.01em',
      fontWeight: 600,
    },
    h3: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    button: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 500,
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
    overline: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '14px 32px',
          boxShadow: 'none',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: colors.primaryContainer,
            boxShadow: '0 12px 32px -4px rgba(30,41,59,0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px -2px rgba(30,41,59,0.05)',
        },
      },
    },
  },
});

export default theme;
