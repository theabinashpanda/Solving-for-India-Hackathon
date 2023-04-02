import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'

const SearchBarSm = ({ setSearchTerm, setFocused, setShowBar }) => {
    const handleIconClick = (event) => {
        setShowBar(true)
    }
    return (
        <IconButton onClick={handleIconClick} size="large" aria-label="search" color="inherit">
            <SearchIcon />
        </IconButton>
    )
}

export default SearchBarSm