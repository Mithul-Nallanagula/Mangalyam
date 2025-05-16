import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    CssBaseline,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { styled, useTheme } from '@mui/system';
import MangalyamLogo from '../images/Mangalyam_text.png';

const FixedAppBar = styled(AppBar)({
    position: 'fixed',
    backgroundColor: '#FFF7E6',
    color: '#000',
    zIndex: 1300,
});

const navItems = ['Home', 'Plans', 'Help', 'Login'];

export default function NavBarOnly() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };



    return (
        <>
            <CssBaseline />
            <FixedAppBar>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {isMobile ? (
                        <>
                            {/* Logo on the left */}
                            <Box
                                component="img"
                                src={MangalyamLogo}
                                alt="Logo"
                                sx={{
                                    width: { xs: '120px', sm: '160px' },
                                    height: 'auto',
                                }}
                            />

                            {/* Hamburger on the right */}
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={toggleDrawer}
                                sx={{ ml: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* Drawer */}
                            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                                <Box
                                    sx={{
                                        width: 210,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                                        <IconButton onClick={() => setDrawerOpen(false)}>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </IconButton>

                                    </Box>

                                    <List>
                                        {navItems.map((text) => (
                                            <ListItem key={text} disablePadding>
                                                <ListItemButton
                                                    onClick={() => {
                                                        setDrawerOpen(false);
                                                        if (text === "Home") navigate("/");
                                                        else if (text === "Plans") navigate("/plan");
                                                        else if (text === "Help") navigate("/help");
                                                        else if (text === "Login") navigate("/login");
                                                    }}
                                                >
                                                    <ListItemText primary={text} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Drawer>



                        </>
                    ) : (
                        <>
                            {/* Logo on the left */}
                            <Box sx={{ flexGrow: 1 }}>
                                <Box
                                    component="img"
                                    src={MangalyamLogo}
                                    alt="Logo"
                                    sx={{
                                        width: { xs: '120px', sm: '160px', md: '200px' },
                                        height: 'auto',
                                    }}
                                />
                            </Box>

                            {/* Nav buttons on the right */}
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                                <Button color="inherit" onClick={() => navigate("/plan")}>Plans</Button>
                                <Button color="inherit" onClick={() => navigate("/help")} >Help</Button>
                                <Button onClick={() => navigate("/login")} variant="contained" sx={{ backgroundColor: '#003300' }}>
                                    Login
                                </Button>
                            </Box>
                        </>
                    )}
                </Toolbar>

            </FixedAppBar>
        </>
    );
}
