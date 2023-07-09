import React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

import { GameCardTemplate } from "../components/GameCardTemplate"

import Grid from '@mui/material/Grid';


export function GameCard({ gameURL }) {
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
        <div>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        p: 1,
                        width: '100%',
                        borderRadius: 10
                    },
                }}
            >
                <Paper elevation={6}>
                    <Box p={1} style={{ textAlign: 'left', margin: 20 }}>
                        <iframe style={frameStyle} title="GameCard" id="iframe" x-frame-options={'allow'} className="iframe" src={gameURL} allowFullScreen={true} allow="fullscreen"></iframe>
                        <Typography variant="h2">Avalonia Online</Typography>
                        <Typography variant="p">Some text about the game here...</Typography>
                    </Box>
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        p: 1,
                        width: '100%',
                        borderRadius: 10
                    },
                }}
            >
                <Paper elevation={6} style={{ marginTop: 15 }}>
                    <Box p={1} style={{ textAlign: 'left', margin: 20 }}>
                        <Typography variant="h3">Similar Games</Typography>
                        <Grid sx={{ flexGrow: 1, marginTop: 5}} container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={12}>
                                    <Grid item>
                                        <GameCardTemplate name={'Avalonia Online'} url={'/avalonia'} image={'https://play-lh.googleusercontent.com/6q2drlagWxmegGG8FrBw_7eRg-GrRo_jpQIj1ofTZ6r-Jj3iBX5u8mTgcazMt_0o_Q'} description={'Avalonia online is an MMORPG created by Stefan Knorr in 2015. Enjoy thousands of players!'} />
                                    </Grid>
                                    <Grid item>
                                        <GameCardTemplate name={'Corleone Online'} url={'/corleone'} image={'https://play-lh.googleusercontent.com/t4zp2bm9QsY8jpBaz0g5zMIed0mFZ5AwjsmImWW46x-qZ3yBrI5qPhzAQhrxzkng_J8=w526-h296-'} description={'Corleone online is an MMORPG created by Stefan Knorr in 2017. Enjoy thousands of players!'} />
                                    </Grid>
                                    <Grid item>
                                        <GameCardTemplate name={'Etherion Online'} url={'/etherion'} image={'https://cdn.cloudflare.steamstatic.com/steam/apps/2227990/ss_5dd4c284e52dde2608db60e13f6cd690f962c98f.1920x1080.jpg?t=1678488847'} description={'Etherion online is an MMORPG created by Stefan Knorr and Shiz in 2021. Enjoy thousands of players!'} />
                                    </Grid>
                                    <Grid item>
                                        <GameCardTemplate name={'Coming Soon'} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}