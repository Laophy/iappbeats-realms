import React from "react"
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";

import WelcomeImage from '../images/etherion_background.jpg'

import Grid from '@mui/material/Grid';

import { FriendsList } from "../components/FriendsList";
import { NewsSideBar } from "../components/NewsSideBar";
import { RecentGames } from "../components/RecentGames";

export function Home() {
    const theme = useTheme();
    return (
        <div style={{ margin: 5, width: '100%', textAlign: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Box
                        sx={{
                            p: 1,
                            width: '100%',
                            minHeight: '40vh',
                            borderRadius: 10,
                            backgroundImage: `url(${WelcomeImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <Box p={1} style={{ textAlign: 'left', margin: 5, marginTop: 200, color: theme.palette.primary.light }}>
                            <Typography variant="h3" sx={{ mt: 2 }}>Welcome back, <strong>Laophy</strong>!</Typography>
                            <Typography variant="p">You have been away for 12 days!</Typography><br />
                            <Typography variant="p"><strong>Tip:</strong> You can create your own world by heading to /createworld</Typography>
                        </Box>
                    </Box>
                    <FriendsList />
                    <RecentGames />
                </Grid>
                <Grid item xs={3}>
                    <NewsSideBar />
                </Grid>
            </Grid>

        </div>
    )
}