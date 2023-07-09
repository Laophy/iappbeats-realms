import React from "react"
import { GameCard } from "../components/GameCard"

export function Animations() {
    return (
        <div style={{margin: 5, width: '100%', textAlign: 'center'}}>
            <h1>Animations</h1>
            <GameCard gameURL={'https://iappsbeats.com/animations/'}/>
        </div>
    )
}