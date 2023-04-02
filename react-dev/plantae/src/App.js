import * as React from 'react'
import TopBar from './TopBar'
import { useTheme } from '@emotion/react'

const App = ({ list }) => {
    const theme = useTheme()

    if (!list) {
        // dummy for testing:
        list = [{ name: "Adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", type: "leaf" },
        { name: "Mahda", type: "fruit" },
        { name: "Krata", type: "branch" },
        { name: "Bhrata", type: "leaf" },]
    }

    document.querySelector('body').style.backgroundColor = theme.palette.primary.dark

    return (
        <div>
            <TopBar list={list} />
        </div >
    )
}

export default App