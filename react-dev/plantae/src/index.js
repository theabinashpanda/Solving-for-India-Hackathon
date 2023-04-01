import ReactDOM from 'react-dom/client'
import { createTheme } from '@mui/material/styles'
import App from './App'
import { ThemeProvider } from '@emotion/react';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#40513B',
            light: '#4e6247',
            dark: '#212a1f'
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={lightTheme}>
        <App />
    </ThemeProvider >
);
