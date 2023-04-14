import * as React from 'react'
import TopBar from './TopBar'
import Upload from './Upload'
import About from './About'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material'

const App = ({ list }) => {
    const theme = useTheme()
    const [disease, setDisease] = React.useState()
    const [about, setAbout] = React.useState(false)

    if (!list) {
        // dummy for testing:
        // list = [{ name: "Adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", type: "leaf" },
        // { name: "Mahda", type: "fruit" },
        // { name: "Krata", type: "branch" },
        // { name: "Bhrata", type: "leaf" },]

        // no data for now
        list = [{ name: "Not implemented yet", type: "Dictionary not added yet" }]
    }

    document.querySelector('body').style.backgroundColor = theme.palette.primary.dark

    return (
        <Box>
            <TopBar list={list} setAbout={setAbout} />
            {!about ? (
                <Box display='flex' alignItems='center' justifyContent='center' height={{ xs: '75vh', md: '73vh' }}>
                    {!disease
                        ? (
                            <Upload setDisease={setDisease} />
                        )
                        : (
                            <Typography variant='h3' color={theme.palette.primary.bright}>{disease.prediction}</Typography>
                        )}
                </Box>)
                : (
                    <About setAbout={setAbout} />
                )}
        </Box >
    )
}

export default App