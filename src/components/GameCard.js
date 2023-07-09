import React from "react"

export function GameCard ({ gameURL }) {
    const frameStyle = {
        margin: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        width: '95%',
        height: '100%',
        minHeight: '85vh',
        border: '2px solid black',
        borderRadius: 25,
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    }
    return (
        <>
            <iframe style={frameStyle} title="GameCard" id="iframe" className="iframe" src={gameURL} allowFullScreen="true" allow="fullscreen"></iframe>
        </>
    )
}