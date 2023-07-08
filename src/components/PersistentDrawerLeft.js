import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import realmsLogo from '../images/iAppbeats_Realms.png'
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AnimationIcon from '@mui/icons-material/Animation';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';

import GamepadIcon from '@mui/icons-material/Gamepad';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {/* <img src={realmsLogo} alt='application logo' width={200} height={32} style={{ margin: 5 }}/> */}
                        iAppbeats Realms
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link to="/home" style={linkStyle}>
                        <ListItem key={'Home'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/games" style={linkStyle}>
                        <ListItem key={'Games'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SportsEsportsIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Games'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/animations" style={linkStyle}>
                        <ListItem key={'Animations'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AnimationIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Animations'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/itempreview" style={linkStyle}>
                        <ListItem key={'ItemPreview'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <VisibilityIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Item Previewer'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/about" style={linkStyle}>
                        <ListItem key={'About'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={'About'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/docs" style={linkStyle}>
                        <ListItem key={'Docs'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DescriptionIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Documentation'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link to="/avalonia" style={linkStyle}>
                        <ListItem key={'Avalonia'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GamepadIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Avalonia'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/corleone" style={linkStyle}>
                        <ListItem key={'Corleone'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GamepadIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Corleone'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/etherion" style={linkStyle}>
                        <ListItem key={'Etherion'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GamepadIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Etherion'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link to="/messages" style={linkStyle}>
                        <ListItem key={'Messages'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ManageAccountsIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Messages'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/friends" style={linkStyle}>
                        <ListItem key={'Friends'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Friends'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/clans" style={linkStyle}>
                        <ListItem key={'Clans'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Global Clans'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/createworld" style={linkStyle}>
                        <ListItem key={'Create'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LoginIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Create World'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link to="/account" style={linkStyle}>
                        <ListItem key={'Account'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ManageAccountsIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Account'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/settings" style={linkStyle}>
                        <ListItem key={'Settings'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Settings'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/login" style={linkStyle}>
                        <ListItem key={'Login'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LoginIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Login'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </Box>
    );
}