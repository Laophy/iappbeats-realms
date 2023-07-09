import React from "react"

export function Itempreview() {
    const frameStyle = {
        margin: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        width: '100%',
        height: '80vh',
        border: 'none',
    }
    return (
        <div>
            <h1>Item Previewer</h1>
            <iframe style={frameStyle} title="GameCard" id="iframe" class="iframe" src="https://iappsbeats.com/itempreview/index.html" allowfullscreen="true" allow="fullscreen"></iframe>

        </div>
    )
}