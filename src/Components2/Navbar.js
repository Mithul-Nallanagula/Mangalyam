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
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useNavigate, useLocation } from 'react-router-dom';

import mangalyamLogo from '../images/Mangalyam_text.png';
import user from '../images/usernav.png';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items for desktop
  const navItems = [
    { label: 'Home', path: '/main' },
    { label: 'Matches', path: '/Match-page' },
    { label: 'Chat', path: '/chat' },
    { label: 'Notification', path: '/notification' },
  ];

  // Bottom navigation value from current route
  const getCurrentBottomNav = () => {
    if (location.pathname.includes('/main')) return 'home';
    if (location.pathname.includes('/Match-page')) return 'matches';
    if (location.pathname.includes('/chat')) return 'chat';
    if (location.pathname.includes('/profile')) return 'profile';
    return '';
  };

  const [bottomNavValue, setBottomNavValue] = React.useState(getCurrentBottomNav());

  // Handle navigation from bottom nav
  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    switch (newValue) {
      case 'home':
        navigate('/main');
        break;
      case 'matches':
        navigate('/Match-page');
        break;
      case 'chat':
        navigate('/chat');
        break;
      case 'profile':
        navigate('/profile');
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
              onClick={() => navigate('/main')}
              component="img"
              src={mangalyamLogo}
              alt="Mangalyam Logo"
              sx={{ height: 35 , cursor:'pointer' }}
            />

            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Search Bar (hidden on mobile) */}
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

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack direction="row" spacing={3} alignItems="center">
                {navItems.map((item) => (
                  <Typography
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    sx={{
                      fontSize: 14,
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      color: location.pathname === item.path ? '#f9a825' : '#000',
                      cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
                <Avatar src={user} alt="User Avatar" onClick={() => navigate('/profile')} sx={{cursor:'pointer', width: 32, height: 32 }} />
              </Stack>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            top: 'auto',
            bottom: 0,
            width: '100%',
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
            <BottomNavigationAction
              label="Home"
              value="home"
              icon={<HomeIcon />}
              sx={{
                color: bottomNavValue === 'home' ? '#f9a825' : undefined,
              }}
            />
            <BottomNavigationAction
              label="Matches"
              value="matches"
              icon={<PeopleIcon />}
              sx={{
                color: bottomNavValue === 'matches' ? '#f9a825' : undefined,
              }}
            />
            <BottomNavigationAction
              label="Chat"
              value="chat"
              icon={<ChatIcon />}
              sx={{
                color: bottomNavValue === 'chat' ? '#f9a825' : undefined,
              }}
            />
            <BottomNavigationAction
              label="Profile"
              value="profile"
              icon={<AccountCircleIcon />}
              sx={{
                color: bottomNavValue === 'profile' ? '#f9a825' : undefined,
              }}
            />
          </BottomNavigation>
        </AppBar>
      )}
    </>
  );
}
