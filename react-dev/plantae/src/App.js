import TopBar from './TopBar'
import { Box } from '@mui/material'
import { useTheme } from '@emotion/react'

const App = () => {
    const theme = useTheme()
    document.querySelector('body').style.backgroundColor = theme.palette.primary.main
    return (
        <div>
            <Box>
                <TopBar list={null} />
            </Box>
        </div>
    )
}

export default App