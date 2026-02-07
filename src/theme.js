import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#D4C4A8', // cinnamon-200 (Gold/Beige)
            contrastText: '#1E120A', // cinnamon-900
        },
        secondary: {
            main: '#8B4513', // cinnamon-500
        },
        background: {
            default: '#1E120A',
            paper: '#2A1B12',
        },
        text: {
            primary: '#F5EFEB', // cinnamon-50
            secondary: '#D4C4A8', // cinnamon-200
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Playfair Display", serif',
        },
        h2: {
            fontFamily: '"Playfair Display", serif',
        },
        h3: {
            fontFamily: '"Playfair Display", serif',
        },
        h4: {
            fontFamily: '"Playfair Display", serif',
        },
        h5: {
            fontFamily: '"Playfair Display", serif',
        },
        h6: {
            fontFamily: '"Playfair Display", serif',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0, // Sharp edges for premium feel? Or rounded? Images look slight rounded or sharp. keeping standard for now.
                    textTransform: 'none',
                    fontFamily: '"Playfair Display", serif',
                },
            },
        },
    },
});

export default theme;
