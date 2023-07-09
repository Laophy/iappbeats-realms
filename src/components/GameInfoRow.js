import React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

export function GameInfoRow({ gameCard, gameInfo }) {
    return (
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
            <Paper elevation={4}>
                <Box p={1} style={{ textAlign: 'left', margin: 5 }}>
                    {gameCard}
                    <Typography variant="h2" sx={{ mt: 2 }}>{gameInfo?.name}</Typography>
                    <Typography variant="p">{gameInfo?.desc}</Typography>
                </Box>
            </Paper>
        </Box>
    )
}