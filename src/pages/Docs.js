import React from "react"

export function Docs() {
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
        <div style={{margin: 5, width: '100%', textAlign: 'center'}}>
            <iframe style={frameStyle} title="GameCard" id="iframe" class="iframe" src="https://docs.iappsbeats.com/#References/Player/" allowfullscreen="true" allow="fullscreen"></iframe>
        </div>
    )
}