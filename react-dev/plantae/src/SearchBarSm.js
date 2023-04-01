import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'

const SearchBarSm = ({ setSearchTerm, setFocused }) => {
    return (
        <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
        </IconButton>
    )
} 

export default SearchBarSm