import React from 'react'
import { logo , title } from '../styles/style.js'
import useHoverLogo from "../hooks/useHoverLogo";
const Logo = () => {
    const logoimages = {
        url: './logo192.png'

    }
    const [hover,mouseOver,mouseOut] = useHoverLogo()
    return (
        <div>
             {
                hover ? <h3 style={title}>Logo</h3> : null
            }

                <img onMouseOver={mouseOver} onMouseOut={mouseOut} style={logo} src={logoimages.url} width="100" alt="Logo"/>
        </div>
    )
}

export default Logo
