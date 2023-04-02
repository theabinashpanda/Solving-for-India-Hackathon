import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme, focused }) => ({
    position: 'relative',
    border: focused ? '1px solid white' : '1px solid #00000000',
    borderRadius: 4,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.20),
    },
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
    transition: 'border 0.2s, backgroundColor 0.2s'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    fontSize: '1.1rem'
}));

const SearchBar = ({ handleSearch, setFocused, focused }) => {

    return (
        <Search focused={focused}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={handleSearch}
                placeholder="Search…"
                inputProps={{
                    'aria-label': 'search',
                }}
                sx={{
                    fontFamily: 'monospace'
                }}
            />
        </Search >
    )
}

export default SearchBar