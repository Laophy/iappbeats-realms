import React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

import Avatar from '@mui/material/Avatar';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import Etherion from '../images/etherion_logo.png'
import Avalonia from '../images/avalonia_logo.png'
import Corleone from '../images/corleone_logo.png'

import LaophyHead from '../images/laophy-head.png'

export function GameRowCategory({ category }) {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                    p: 5,
                    mt: 1,
                    width: '100%',
                    minHeight: '40vh',
                    borderRadius: 10,
                },
            }}
        >
            <Box p={1} style={{ textAlign: 'left', margin: 1 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography variant="h6" sx={{ mt: 2, mb: 5 }}>{category ? category : 'Browse Games'}</Typography>
                    <Typography variant="h6" sx={{ mt: 2, mb: 5 }}>{'View All ->'}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-left'
                }}>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '20%', margin: 1 }}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5 }}>
                            <Avatar alt="Laophy" src={Etherion} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Etherion Online</Typography>
                            <Typography variant="p">{category ? category : 'Unknown'}</Typography><br />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                            }}><ThumbUpOffAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>100%</Typography> <PeopleAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>41</Typography><br />
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '20%', margin: 1 }}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5 }}>
                            <Avatar alt="Laophy" src={Avalonia} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Avalonia Online</Typography>
                            <Typography variant="p">{category ? category : 'Unknown'}</Typography><br />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                            }}><ThumbUpOffAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>100%</Typography> <PeopleAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>56</Typography><br />
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '20%', margin: 1 }}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5 }}>
                            <Avatar alt="Laophy" src={Corleone} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Corleone Online</Typography>
                            <Typography variant="p">{category ? category : 'Unknown'}</Typography><br />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                            }}><ThumbUpOffAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>100%</Typography> <PeopleAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>65</Typography><br />
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '20%', margin: 1 }}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5 }}>
                            <Avatar alt="Laophy" src={'https://i.imgur.com/skUXQj8.png'} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Kingdom Tribes</Typography>
                            <Typography variant="p">{category ? category : 'Unknown'}</Typography><br />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                            }}><ThumbUpOffAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>100%</Typography> <PeopleAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>3</Typography><br />
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={4} sx={{ borderRadius: 5, width: '20%', margin: 1 }}>
                        <Box p={1} style={{ textAlign: 'center', margin: 5 }}>
                            <Avatar alt="Laophy" src={'https://i.imgur.com/R0NWzRJ.png'} sx={{ width: 64, height: 64, marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Testbed</Typography>
                            <Typography variant="p">{category ? category : 'Unknown'}</Typography><br />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                            }}><ThumbUpOffAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>0%</Typography> <PeopleAltIcon /><Typography variant="p" style={{ verticalAlign: 'top' }}>1</Typography><br />
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}