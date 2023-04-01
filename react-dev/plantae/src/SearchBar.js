import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    marginTop: 4,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
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

const SearchBar = ({ setSearchTerm, setFocused }) => {

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        if (event.target.value === '') {
            setSearchTerm(null)
        }
    }

    return (
        <Search>
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