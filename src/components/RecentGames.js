import React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

import Avatar from '@mui/material/Avatar';

import Etherion from '../images/etherion_logo.png'
import Avalonia from '../images/avalonia_logo.png'
import Corleone from '../images/corleone_logo.png'

import LaophyHead from '../images/laophy-head.png'

export function RecentGames() {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                    p: 5,
                    mt: 2,
                    width: '100%',
                    minHeight: '40vh',
                    borderRadius: 10,
                },
            }}
        >
            <Box p={1} style={{ textAlign: 'left', margin: 5 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography variant="h6" sx={{ mt: 2, mb: 5 }}>{'Recent Games'}</Typography>
                    <Typography variant="h6" sx={{ mt: 2, mb: 5 }}>{'View All ->'}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>
                    <Paper elevation={4} sx={{ borderRadius: 5, minWidth: '25%', margin: 1 }}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5, }}>
                            <Avatar alt="Laophy" src={Etherion} sx={{ width: 128, height: 128, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Etherion Online</Typography>
                            <Typography variant="p">Action / RPG</Typography><br />
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, minWidth: '25%', margin: 1 }}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5, }}>
                            <Avatar alt="Laophy" src={Avalonia} sx={{ width: 128, height: 128, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Avalonia Online</Typography>
                            <Typography variant="p">Fantasy / RPG</Typography><br />
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, minWidth: '25%', margin: 1 }}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5, }}>
                            <Avatar alt="Laophy" src={Corleone} sx={{ width: 128, height: 128, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Corleone Online</Typography>
                            <Typography variant="p">Mafia / RPG</Typography><br />
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, minWidth: '25%', margin: 1 }}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5, }}>
                            <Avatar alt="Laophy" src={LaophyHead} sx={{ width: 128, height: 128, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>iAppbeats Realms</Typography>
                            <Typography variant="p">Coming Soon</Typography><br />
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}