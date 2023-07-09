import React from "react"

export function NotFound() {
    return (
        <React.Fragment>
            <div style={{margin: 5, width: '100%', textAlign: 'center'}}>
                <h1>Oh Noes!</h1>
                <p>Page not found, please reload and try again.</p>
            </div>
        </React.Fragment>
    )
}