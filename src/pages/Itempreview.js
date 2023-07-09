import React from "react"

export function Itempreview() {
    const frameStyle = {
        margin: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        width: 400,
        height: 400,
        border: 'none',
    }
    return (
        <div>
            <iframe style={frameStyle} title="GameCard" id="iframe" class="iframe" src="https://iappsbeats.com/itempreview/index.html" allowfullscreen="true" allow="fullscreen"></iframe>
        </div>
    )
}