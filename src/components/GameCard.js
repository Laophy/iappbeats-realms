import React from "react"
import { SimilarGamesRow } from "./SimilarGamesRow";
import { GameInfoRow } from "./GameInfoRow";


export function GameCard({ gameURL, gameInfo }) {
    const frameStyle = {
        margin: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        width: '100%',
        height: '100%',
        minHeight: '85vh',
        border: 'none',
        borderRadius: 25,
        boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
    }
    return (
        <div>
            <GameInfoRow gameCard={<iframe style={frameStyle} title="GameCard" id="iframe" x-frame-options={'allow'} className="iframe" src={gameURL} allowFullScreen={true} allow="fullscreen"></iframe>} gameInfo={gameInfo}/>
            <SimilarGamesRow />
        </div>
    )
}