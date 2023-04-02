import { Button, Box } from '@mui/material'
import * as React from 'react'
import comms from './services/comms'

const Upload = ({ setDisease }) => {
    const [file, setFile] = React.useState()
    const [preview, setPreview] = React.useState()

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
        const res = await comms.sendFile(file)
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
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>

            <Box margin={4} display='block' height='300px'>
                {preview ? (
                    <img src={preview} alt="uploaded" height='300px' />
                ) : null}
            </Box>
            <form>
                <input onChange={handleUpload} type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
                <Box>
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
                    }}>{preview ? (<>Change</>) : (<>Upload</>)}</Button>
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
        </Box>
    )
}

export default Upload