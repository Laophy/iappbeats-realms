import React from "react"
import { GameCard } from "../components/GameCard"

export function About() {
    return (
        <div style={{ margin: 5, width: '100%', textAlign: 'center' }}>
            <h1>About Page</h1>
            <GameCard gameURL={'https://www.facebook.com/iappsbeats/'} />
        </div>
    )
}