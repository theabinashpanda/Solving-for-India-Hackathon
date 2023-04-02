import * as React from 'react'
import TopBar from './TopBar'
import Upload from './Upload'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material'

const App = ({ list }) => {
    const theme = useTheme()
    const [disease, setDisease] = React.useState()

    if (!list) {
        // dummy for testing:
        list = [{ name: "Adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", type: "leaf" },
        { name: "Mahda", type: "fruit" },
        { name: "Krata", type: "branch" },
        { name: "Bhrata", type: "leaf" },]
    }

    document.querySelector('body').style.backgroundColor = theme.palette.primary.dark

    return (
        <Box>
            <TopBar list={list} />
            <Box display='flex' alignItems='center' justifyContent='center' height={{ xs: '75vh', md: '73vh' }}>
                {!disease
                    ? (
                        <Upload setDisease={setDisease} />
                    )
                    : (
                        <Typography variant='h6' color={theme.palette.primary.bright}>{disease.prediction}</Typography>
                    )}
            </Box>
        </Box >
    )
}

export default App