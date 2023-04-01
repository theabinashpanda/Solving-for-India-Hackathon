import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchBar from './SearchBar';
import SearchBarSm from './SearchBarSm';
import { List, ListItem, ListItemText } from '@mui/material/';
import { border, borderRadius } from '@mui/system';

const pages = ['Dictionary', 'About the project'];

const TopBar = ({ list }) => {
    if (!list) {
        // dummy for testing:
        list = [{ name: "Adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", type: "leaf" },
        { name: "Mahda", type: "fruit" },
        { name: "Krata", type: "branch" },
        { name: "Bhrata", type: "leaf" },]
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState(null);
    const [focused, setFocused] = React.useState(false)

    const filteredList = list
        ? list.filter(item => item.name.includes(searchTerm))
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
                        secondaryTypographyProps={{ color: '#8fb383' }}
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

    return (
        <AppBar elevation={0} sx={{
            position: 'absolute',
            // border: '2px solid red'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
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
                            // alignSelf: 'flex-start'
                        }}
                    >
                        Plantae
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{
                                    // padding: '50px',
                                    // border: '2px solid red'
                                }}>
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
                        paddingLeft: 3,
                        paddingRight: 3
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
                                    paddingTop: 1.5,
                                    fontWeight: 400,
                                    fontSize: '1rem',
                                }}>
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{
                        display: { xs: 'none', md: 'block' },
                    }}>
                        <SearchBar list={list} setSearchTerm={setSearchTerm} setFocused={setFocused} />
                    </Box>
                    <Box sx={{
                        display: { xs: 'block', md: 'none' },
                    }}>
                        <SearchBarSm list={list} setSearchTerm={setSearchTerm} setFocused={setFocused} />
                    </Box>
                </Toolbar>
            </Container>
            {
                filteredList.length !== 0
                    ? (
                        <List sx={{
                            backgroundColor: 'primary.light',
                            postion: 'absolute',
                            display: focused ? 'static' : 'none',
                            width: 200,
                            borderRadius: '20px'
                        }}>
                            {filteredList}
                        </List>
                    )
                    : null
            }
        </AppBar >
    );
}

export default TopBar
