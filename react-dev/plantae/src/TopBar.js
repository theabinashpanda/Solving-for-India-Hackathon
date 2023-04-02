import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/West';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchBar from './SearchBar';
import SearchBarSm from './SearchBarSm';
import { List, ListItem, ListItemText, TextField } from '@mui/material/';
import zIndex from '@mui/material/styles/zIndex';

const pages = ['Dictionary', 'About the project'];

const TopBar = ({ list }) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [focused, setFocused] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState(null)
    const [showBar, setShowBar] = React.useState(false)

    const filteredList = list && searchTerm
        ? list.filter(item => item.name.toUpperCase().includes(searchTerm.toUpperCase()))
            .map(item => (
                <ListItem>
                    {/* for icons:
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar> */}
                    <ListItemText primary={item.name.length > 19 ? item.name.substr(0, 16) + '...' : item.name}
                        secondary={item.type}
                        primaryTypographyProps={{ color: 'primary.black', fontSize: '1.1rem', fontWeight: 500 }}
                        secondaryTypographyProps={{ color: 'secondary.main' }}
                    />
                </ListItem>
            ))
        : []

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        if (event.target.value === '') {
            setSearchTerm(null)
        }
    }

    return (
        <Box position='relative'>
            <AppBar elevation={0} sx={{
                position: 'static',
                bgcolor: 'primary.dark',
                display: !showBar ? 'block' : { xs: 'none', md: 'block' },
                height: { xs: '10vh', md: '12vh' },
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '2rem',
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                paddingLeft: 2,
                            }}
                        >
                            Plantae
                        </Typography>

                        <Box sx={{
                            flexGrow: 1, display: { xs: 'flex', md: 'none' }
                        }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Plantae
                        </Typography>
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            postion: 'relative',
                            paddingTop: 1,
                            paddingLeft: 3,
                            paddingRight: 3,
                        }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        paddingLeft: 3,
                                        paddingRight: 3,
                                        fontWeight: 400,
                                        letterSpacing: 2,
                                        fontFamily: 'monospace',
                                        fontSize: '1.1rem',
                                    }}>
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{
                            display: { xs: 'block', md: 'none' },
                        }}>
                            <SearchBarSm list={list} setShowBar={setShowBar} />
                        </Box>
                    </Toolbar>
                </Container>

                <Box sx={{
                    position: 'absolute',
                    zIndex: 2,
                    display: { xs: 'none', md: 'block' },
                    top: 20,
                    right: 20,
                }}>
                    <SearchBar list={list} focused={focused} handleSearch={handleSearch} setFocused={setFocused} sx={{
                    }} />
                    {
                        filteredList.length !== 0
                            ? (
                                <List sx={{
                                    backgroundColor: 'primary.medium',
                                    postion: 'relative',
                                    display: focused ? 'block' : 'none',
                                    width: '100%',
                                    top: 5,
                                    p: 0,
                                    borderRadius: 1.5,
                                    border: '1px solid white',
                                    boxSizing: 'border-box'
                                }}>
                                    {filteredList}
                                </List>
                            )
                            : null
                    }
                </Box>
            </AppBar >
            {showBar ? (
                <Box sx={{
                    boxSizing: 'border-box',
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    bgcolor: 'primary.light',
                    zIndex: '1'
                }}>
                    <ArrowBackIcon onClick={() => setShowBar(false)} sx={{
                        transform: 'scale(1.5)',
                        paddingTop: 2,
                        paddingLeft: 2,
                    }} />
                    <TextField fullWidth autoFocus
                        variant='standard'
                        onBlur={() => setShowBar(false)}
                        onChange={handleSearch}
                        InputProps={{
                            style: {
                                fontSize: '1.5rem',
                                paddingLeft: 10,
                                paddingRight: 10,
                                boxSizing: 'border-box',
                            }
                        }}
                        sx={{
                            display: showBar ? { xs: 'block', md: 'none' } : 'none',
                            width: '100%',
                            top: 0,
                            left: 0,
                            padding: '5%',
                            boxSizing: 'border-box',
                        }}>
                    </TextField>
                    {
                        filteredList.length !== 0
                            ? (
                                <List sx={{
                                    postion: 'static',
                                    width: '80%',
                                    marginLeft: '5%',
                                    marginRight: '15%',
                                    boxSizing: 'border-box',
                                    display: { xs: 'block', md: 'none' },
                                }}>
                                    {filteredList}
                                </List>
                            )
                            : null
                    }
                </Box >
            ) : null
            }
        </Box >
    );
}

export default TopBar
