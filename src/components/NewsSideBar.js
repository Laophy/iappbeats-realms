import React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { NewsCard } from "./NewsCard";

import AvaloniaImage from '../images/avalonia_news.png'

export function NewsSideBar({ name = 'Default Name', image, url, description }) {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                    p: 2,
                    width: '100%',
                    height: '90vh',
                    overflowY: 'scroll',
                    borderRadius: 5,
                },
            }}
        >
            <Paper elevation={4} >
                    <NewsCard title={"iAppbeats Realms"} image={AvaloniaImage} description={'iAppbeats is launching Realms! Check out the fully functioning website today. Join thousands of other players together in a single place.'}/>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
            </Paper>
        </Box>
    )
}