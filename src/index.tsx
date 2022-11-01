import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(210, 65, 21)',
      light: 'rgb(234, 88, 12)',
    },
    secondary: {
      main: 'rgb(148 163 184)',
      light: 'rgb(199 230 248)',
    },
    text: {
      primary: 'rgb(30 41 59)',
      secondary: 'rgb(71 85 105)',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif', 'Eczar', 'serif'].join(','),
    htmlFontSize: 16,
    h1: {
      fontFamily: 'Public Sans,  sans-serif',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '64px',
      lineHeight: '80px',
      color: '#FFF',
      '@media (max-width: 900px)': {
        fontSize: '40px',
        lineHeight: '50px',
      },
      '@media (max-width: 400px)': {
        fontSize: '32px',
        lineHeight: '40px',
      },
    },
    h3: {
      fontFamily: 'Public Sans,  sans-serif',
      fontStyle: 'normal',
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: 700,
      letterSpacing: '0px',
      '@media (max-width: 600px)': {
        fontSize: '24px',
        lineHeight: '36px',
      },
    },
    subtitle2: {
      fontFamily: 'Public Sans,  sans-serif',
      fontStyle: 'normal',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '20px',
    },
    body2: {
      fontFamily: 'Public Sans,  sans-serif',
      fontStyle: 'normal',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '20px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 'max-content',
          '&:hover': {
            background: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            background: 'none',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
