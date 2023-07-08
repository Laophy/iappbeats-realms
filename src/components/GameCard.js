import React from "react"

export function GameCard ({ gameURL }) {
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
            <iframe style={frameStyle} title="GameCard" id="iframe" class="iframe" src={gameURL} allowfullscreen="true" allow="fullscreen"></iframe>
        </>
    )
}