import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  Stack,
  Avatar,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
  Container,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ChatIcon from '@mui/icons-material/Chat';

import { useNavigate } from 'react-router-dom';
import mangalyamLogo from '../images/Mangalyam_text.png';
import user from '../images/usernav.png';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [bottomNavValue, setBottomNavValue] = React.useState('home');

  const navItems = ['Home', 'Matches', 'Chat', 'Notification'];
  const navigate = useNavigate();

  // Handle navigation on bottom nav change
  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    switch (newValue) {
      case 'home':
        navigate('/');
        break;
      case 'matches':
        navigate('/Match-page'); // update with your route
        break;
      case 'chat':
        navigate('/chat'); // example route
        break;
      case 'notification':
        navigate('/notification'); // example route
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#f5f5f5',
          boxShadow: 'none',
          height: 60,
          justifyContent: 'center',
          top: 0,
          bottom: 'auto',
        }}
      >
        <Toolbar sx={{ minHeight: '0 !important' }}>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo */}
            <Box
              component="img"
              src={mangalyamLogo}
              alt="Maangalyaam Logo"
              sx={{ height: 35 }}
            />

            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Search Bar - Hide on mobile */}
            {!isMobile && (
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  backgroundColor: alpha('#000', 0.05),
                  '&:hover': { backgroundColor: alpha('#000', 0.1) },
                  width: '40%',
                  px: 2,
                  py: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  mr: 4,
                }}
              >
                <SearchIcon sx={{ fontSize: 20, mr: 1, color: '#999' }} />
                <InputBase placeholder="Type to search" fullWidth sx={{ fontSize: 14 }} />
              </Box>
            )}

            {/* Desktop Nav */}
            {!isMobile ? (
              <Stack direction="row" spacing={3} alignItems="center">
                {navItems.map((item) => (
                  <Typography
                    key={item}
                    onClick={() => {
                      if (item === 'Matches') {
                        navigate('/Match-page'); // Change to your actual route
                      }
                      if (item === 'Home') {
                        navigate('/');
                      }
                      if (item === 'Chat') {
                        navigate('/chat');
                      }
                      if (item === 'Notification') {
                        navigate('/notification');
                      }
                    }}
                    sx={{
                      fontSize: 14,
                      fontWeight: item === 'Home' ? 600 : 400,
                      color: item === 'Home' ? '#f9a825' : '#000',
                      cursor: 'pointer',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
                <Avatar src={user} alt="User Avatar" sx={{ width: 32, height: 32 }} />
              </Stack>
            ) : null}
          </Container>
        </Toolbar>
      </AppBar>

      {/* Bottom Navigation only visible on mobile */}
      {isMobile && (
  <AppBar
    position="fixed"
    sx={{
      top: 'auto',
      width:'100%',
      bottom: 0,
      backgroundColor: '#fff',
      borderTop: '1px solid #ddd',
      zIndex: theme.zIndex.appBar,
    }}
  >
    <BottomNavigation
      value={bottomNavValue}
      onChange={handleBottomNavChange}
      showLabels
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Matches" value="matches" icon={<PeopleIcon />} />
      <BottomNavigationAction label="Chat" value="chat" icon={<ChatIcon />} />
      <BottomNavigationAction label="Pofile" value="Profile" onClick={() => navigate("/profile")} icon={<AccountCircleIcon />} />
    </BottomNavigation>
  </AppBar>
)}

    </>
  );
}
