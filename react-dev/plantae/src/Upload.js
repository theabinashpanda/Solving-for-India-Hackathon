import { Button, Box, Typography } from '@mui/material'
import UploadIcon from '@mui/icons-material/Spa'
import CircularProgress from '@mui/material/CircularProgress';

import * as React from 'react'
import comms from './services/comms'

const Upload = ({ setDisease }) => {
    const [file, setFile] = React.useState()
    const [preview, setPreview] = React.useState()
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        if (!file) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    const handleSubmit = async (event) => {
        setLoading(true)
        const res = await comms.sendFile(file)
        setLoading(false)
        setDisease(res)
    }

    const inputFile = React.useRef(null)
    const handleButtonClick = (event) => {
        inputFile.current.click()
    }

    const handleUpload = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setFile(undefined)
        }
        setFile(event.target.files[0])
    }

    return (
        <Box display='flex' alignItems='center' justifyContent='space-evenly' flexDirection='column'>

            <Box margin={4} display='flex' height="300px" alignItems='center'>
                {!loading
                    ? (preview
                        ? (
                            <img src={preview} alt="uploaded" height='300px' />
                        )
                        : (
                            <UploadIcon sx={{
                                fontSize: '200px',
                                display: 'block',
                                color: 'primary.light',
                                height: '300px'
                            }} />
                        ))
                    : (<CircularProgress size="100px" />)
                }
            </Box>
            <form>
                <input onChange={handleUpload} type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
                <Box sx={{ display: loading ? 'none' : 'block' }}>
                    <Button onClick={handleButtonClick} variant="contained" disableElevation sx={{
                        bgcolor: 'primary.bright',
                        color: 'primary.black',
                        fontSize: '1.2rem',
                        '&:hover': {
                            bgcolor: 'primary.black',
                            color: 'primary.bright'
                        },
                        padding: '0.5rem 1rem',
                        margin: '0.5rem'
                    }}>
                        {preview ? (<>Change</>) : (<>Upload</>)}
                    </Button>
                    <Button onClick={handleSubmit} variant="contained" disableElevation sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.black',
                        fontSize: '1.2rem',
                        '&:hover': {
                            bgcolor: 'primary.black',
                            color: 'primary.light'
                        },
                        margin: '0.5rem',
                        padding: '0.5rem 1rem',
                        display: preview ? 'inline' : 'none'
                    }}>Submit</Button>
                </Box>
            </form>
            <Typography variant='h6' paddingTop={8} color='primary.light'>Cotton leaves only for now, more coming soon!</Typography>
        </Box>
    )
}

export default Upload