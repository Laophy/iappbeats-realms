import React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

import Avatar from '@mui/material/Avatar';

import AvatarHead from '../images/laophy-head.png'

export function FriendsList() {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                    p: 5,
                    mt: 2,
                    width: '100%',
                    minHeight: '30vh',
                    borderRadius: 10,
                },
            }}
        >
            <Box p={1} style={{ textAlign: 'left', margin: 5 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography variant="h6" sx={{ mt: 2, mb: 5 }}>{'Friends (5)'}</Typography>
                    <Typography variant="h6" sx={{ mt: 2, mb: 5 }}>{'View All ->'}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '25%', margin: 1}}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5}}>
                            <Avatar alt="Laophy" src={'https://i.imgur.com/RSQTZNb.png'} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Shiz</Typography>
                            <Typography variant="p">Etherion Online</Typography><br />
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '25%', margin: 1}}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5}}>
                            <Avatar alt="Laophy" src={'https://i.imgur.com/ZRea9UL.gif'} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Laophy</Typography>
                            <Typography variant="p">Corleone Online</Typography><br />
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '25%', margin: 1}}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5}}>
                            <Avatar alt="Laophy" src={'https://i.imgur.com/8ykfgQH.gif'} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Stefan Knorr</Typography>
                            <Typography variant="p">Avalonia Online</Typography><br />
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '25%', margin: 1}}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5}}>
                            <Avatar alt="Laophy" src={'https://i.imgur.com/eHe6hED.png'} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Nico</Typography>
                            <Typography variant="p">Kingdom Tribes</Typography><br />
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '25%', margin: 1}}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5}}>
                            <Avatar alt="Laophy" src={'https://i.imgur.com/XiIUq9Q.gif'} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Duke</Typography>
                            <Typography variant="p">Ether Arena</Typography><br />
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '25%', margin: 1}}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5}}>
                            <Avatar alt="Laophy" src={'https://i.imgur.com/FQvWrpu.png'} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Pocket</Typography>
                            <Typography variant="p">Testbed</Typography><br />
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}