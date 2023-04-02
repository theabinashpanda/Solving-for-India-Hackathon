import ReactDOM from 'react-dom/client'
import { createTheme } from '@mui/material/styles'
import App from './App'
import { ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#40513B',
            bright: '#EDF1D6',
            light: '#4e6247',
            dark: '#212a1f',
            medium: '#424a40',
            black: '#10150f',
        },
        secondary: {
            main: '#b0b000'
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={darkTheme}>
        <App />
    </ThemeProvider >
);
