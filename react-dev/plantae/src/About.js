import { Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/West';
import { alignProperty } from '@mui/material/styles/cssUtils';

const About = ({ setAbout }) => {

    return (
        <Box sx={{
            width: '100%',
            paddingTop: 4,
            boxSizing: 'border-box'
        }}>
            <ArrowBackIcon onClick={() => setAbout(false)} sx={{
                transform: 'scale(1.5)',
                paddingTop: 2,
                paddingLeft: 4,
                display: 'block',
                color: 'primary.bright',
                cursor: 'pointer'
            }} />
            <Box width={'100%'} display='flex' justifyContent='center'>
                <Typography variant='h4' sx={{
                    paddingRight: 2,
                    color: 'primary.light'
                }}>
                    About the project
                </Typography>
            </Box>
            <Box display='block' sx={{
                padding: { xs: '0 50px', md: '0 200px' },
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <Typography color='primary.bright' display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='space-around'
                    sx={{ minHeight: '60vh' }}
                >
                    <p>
                        The project aims to provide an easily accessible method
                        of determining the health of plants. It uses an ML model
                        to determine the status of a plant from its photo.
                        The model uses MobileNetV2 at its base and has been trained on the
                        <Typography sx={{
                            display: 'inline',
                            margin: '0 5px',
                            'a': {
                                color: 'primary.dark',
                                textDecoration: 'none',
                                backgroundColor: 'primary.bright',
                                '&:hover': {
                                    color: 'primary.light',
                                    backgroundColor: 'primary.dark'
                                }
                            }
                        }}>
                            <a href='https://www.kaggle.com/datasets/janmejaybhoi/cotton-disease-dataset' target='_blank'>
                                Cotton Disease Dataset by D3V on kaggle.
                            </a>
                        </Typography>
                        The frontend has been made with React and Material UI. The server has been
                        made with Node.js and Express.js.
                        The project has been deployed on Google Compute Engine and stores the images uploaded in a
                        GCP bucket for training and testing purposes.
                    </p>
                    <Typography variant='h5'
                        sx={{
                            display: 'block',
                            padding: '20px 0'
                        }}>
                        For now, it works only on
                        <Typography variant='inherit'
                            sx={{
                                display: 'inline',
                                color: 'primary.dark',
                                backgroundColor: 'primary.bright',
                                margin: '0 10px'
                            }}
                        >cotton leaves.
                        </Typography>
                    </Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export default About