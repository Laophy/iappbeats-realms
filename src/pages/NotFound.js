import React from "react"

export function NotFound() {
    return (
        <React.Fragment>
            {/* border: '1px solid black', borderRadius: 25,  */}
            <div style={{margin: 5, width: 960, marginLeft: 'auto', marginRight: 'auto'}}>
                <h1>Oh Noes!</h1>
                <p>Page not found, please reload and try again.</p>
            </div>
        </React.Fragment>
    )
}