import React from "react"
import { GameCard } from "../components/GameCard"

export function Animations() {
    return (
        <div style={{margin: 5, width: '100%', textAlign: 'center'}}>
            <GameCard gameURL={'https://iappsbeats.com/animations/'} gameInfo={{ name: 'Animations Tool', desc: 'Animations tool for iAppbeats, used to create animations for hosted games.' }}/>
        </div>
    )
}