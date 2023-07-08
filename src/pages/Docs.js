import React from "react"

export function Docs() {
    const frameStyle = {
        margin: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        width: '80vw',
        height: '80vh',
        border: 'none',
    }
    return (
        <>
            <h1>iAppbeats Documentation</h1>
            <iframe style={frameStyle} title="GameCard" id="iframe" class="iframe" src="https://docs.iappsbeats.com/#References/Player/" allowfullscreen="true" allow="fullscreen"></iframe>
        </>
    )
}