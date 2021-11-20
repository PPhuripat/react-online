import React from 'react'

const Logo = () => {
    const logoimages = {
        url: './logo192.png'

    }
    return (
        <div>
            <img src={logoimages.url} width="100" alt="logo"></img>
        </div>
    )
}

export default Logo
