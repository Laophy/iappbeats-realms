import React from "react"
import { GameCardTemplate } from "../components/GameCardTemplate"

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

export function Games() {
    const gameCardGrid = {
        maring: 5,
    }
    return (
        <div className="gamecards" style={gameCardGrid}>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        p: 1,
                        width: '100%',
                        borderRadius: 10,
                        marginBottom: 5
                    },
                }}
            >
                <Paper elevation={4} style={{ marginTop: 15 }}>
                    <Box p={1} style={{ textAlign: 'left', margin: 20 }}>
                        <Typography variant="h3">Trending</Typography>
                        <Grid sx={{ flexGrow: 1, marginTop: 5 }} container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={3}>
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
                                    <Grid item>
                                        <GameCardTemplate name={'Coming Soon'} />
                                    </Grid>
                                    <Grid item>
                                        <GameCardTemplate name={'Coming Soon'} />
                                    </Grid>
                                    <Grid item>
                                        <GameCardTemplate name={'Coming Soon'} />
                                    </Grid>
                                    <Grid item>
                                        <GameCardTemplate name={'Coming Soon'} />
                                    </Grid>
                                    <Grid item>
                                        <GameCardTemplate name={'Coming Soon'} />
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
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        p: 1,
                        width: '100%',
                        borderRadius: 10,
                        marginBottom: 5
                    },
                }}
            >
                <Paper elevation={4} style={{ marginTop: 15 }}>
                    <Box p={1} style={{ textAlign: 'left', margin: 20 }}>
                        <Typography variant="h3">Hosted Servers</Typography>
                        <Grid sx={{ flexGrow: 1, marginTop: 5 }} container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={3}>
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
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        p: 1,
                        width: '100%',
                        borderRadius: 10,
                        marginBottom: 5
                    },
                }}
            >
                <Paper elevation={4} style={{ marginTop: 15 }}>
                    <Box p={1} style={{ textAlign: 'left', margin: 20 }}>
                        <Typography variant="h3">Action</Typography>
                        <Grid sx={{ flexGrow: 1, marginTop: 5 }} container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={3}>
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
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        p: 1,
                        width: '100%',
                        borderRadius: 10,
                        marginBottom: 5
                    },
                }}
            >
                <Paper elevation={4} style={{ marginTop: 15 }}>
                    <Box p={1} style={{ textAlign: 'left', margin: 20 }}>
                        <Typography variant="h3">New</Typography>
                        <Grid sx={{ flexGrow: 1, marginTop: 5 }} container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={3}>
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
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        p: 1,
                        width: '100%',
                        borderRadius: 10,
                        marginBottom: 5
                    },
                }}
            >
                <Paper elevation={4} style={{ marginTop: 15 }}>
                    <Box p={1} style={{ textAlign: 'left', margin: 20 }}>
                        <Typography variant="h3">Adventure</Typography>
                        <Grid sx={{ flexGrow: 1, marginTop: 5 }} container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={3}>
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
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        p: 1,
                        width: '100%',
                        borderRadius: 10,
                        marginBottom: 5
                    },
                }}
            >
                <Paper elevation={4} style={{ marginTop: 15 }}>
                    <Box p={1} style={{ textAlign: 'left', margin: 20 }}>
                        <Typography variant="h3">Creative Worlds</Typography>
                        <Grid sx={{ flexGrow: 1, marginTop: 5 }} container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={3}>
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