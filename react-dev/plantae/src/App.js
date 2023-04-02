import * as React from 'react'
import TopBar from './TopBar'
import Upload from './Upload'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material'

const App = ({ list }) => {
    const theme = useTheme()

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
            <Box display='flex' alignItems='center' justifyContent='center' height={{ xs: '90vh', md: '88vh' }}>
                <Upload />
            </Box>
        </Box >
    )
}

export default App