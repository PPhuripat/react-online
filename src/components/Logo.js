import React from 'react'
import { logo , title } from '../styles/style.js'

const Logo = () => {
    const logoimages = {
        url: './logo192.png'

    }
    return (
        <div>
            <h3 style={title}>Logo</h3>
            <img style={logo} src={logoimages.url} width="100" alt="logo"></img>
        </div>
    )
}

export default Logo
