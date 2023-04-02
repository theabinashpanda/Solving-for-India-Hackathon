import { Button, Box } from '@mui/material'
import * as React from 'react'

const Upload = () => {
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

    const inputFile = React.useRef(null)
    const handleButtonClick = (event) => {
        inputFile.current.click()
    }
    const handleUpload = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setFile(undefined)
            console.log('uplaoded')
        }
        setFile(event.target.files[0])
    }

    if (file) {
        console.log('file: ', file)
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
                <Button onClick={handleButtonClick} variant="contained" disableElevation sx={{
                    bgcolor: 'primary.bright',
                    color: 'primary.black',
                    fontSize: '1.2rem',
                    '&:hover': {
                        bgcolor: 'primary.black',
                        color: 'primary.bright'
                    },
                    padding: '0.5rem 1rem'
                }}>Upload</Button>
            </form>
        </Box>
    )
}

export default Upload