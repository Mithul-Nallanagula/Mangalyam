import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  
  Button,
  Divider,
  
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import user5 from '../images/user5.png';

const profileData = {
  progress: 80,
  name: 'Grag',
  age: 28,
  height: '5ft 8in',
  religion: 'Hindu',
  caste: 'Brahmin',
  motherTongue: 'Hindi',
  education: 'M.Sc. Computer Science',
  profession: 'Software Engineer',
  location: 'Bangalore, Karnataka, India',
  phone: '+91- 9876543210',
  email: 'anya.sharma@email.com',
  aboutMe:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  basicDetails: [
    { Profile: 'Myself' },
    { Gender: 'Male' },
    { Firstname: 'Raghav' },
    { 'Second Name': 'Sarberwe' },
    { 'Phone Number': '+91 6302660450' },
    { Email: 'Sarberbwr@gmail.com' },
  ],
  CastDetails: [
    { Country: 'India' },
    { Caste: 'Reddy' },
    { State: 'Telangana' },
    { SubCaste: 'Chapala' },
    { City: 'Hyderabad' },
    { Religion: 'Christian' },
  ],
  profileImage: 'https://via.placeholder.com/100/FFC107/000000?Text=AS',
};

function Profile() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        mt: 4,
        bgcolor: '#f4f6f8',
        minHeight: '100vh',
        p: 2,
        gap: 2,
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          mt:2,
          width: { xs: '100%', md: 750  },
          bgcolor: 'white',
          borderRadius: 1,
        }}
      >
        <List>
          {['My Profile', 'Basic Details', 'Photo Album', 'Personal Details', 'Professional Details'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  bgcolor: index === 0 ? '#ffc107' : index === 1 ? '#d3d3d3' : 'transparent',
                  height: 40,
                  borderRadius: 1,
                  mx: 1,
                  my: 0.5,
                }}
              >
                <ListItemText primary={text} primaryTypographyProps={{ fontWeight: index === 0 ? 'bold' : 'normal' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'white',
          borderRadius: 1,
          p: 2,
          overflowY: 'auto',
          maxHeight: { md: '95vh', xs: 'auto' },
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}
      >
        {/* Profile Progress */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            bgcolor: '#004225',
            borderRadius: 2,
            p: 2,
            mt: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px solid white',
                height: 40,
                width: 40,
                borderRadius: '50%',
                bgcolor: '#fff',
              }}
            >
              <Typography sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>80%</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
                Profile Progress: 80% Complete
              </Typography>
              <Typography sx={{ color: 'white', fontSize: 10 }}>
                Take it to 100% for More Features and an Elevated Platform Experience!
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* User Info */}
        <Box sx={{ border: '1px solid #c1ddb3', p: 2, borderRadius: 3, mt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2 }}>
            <Box component="img" alt={profileData.name} src={user5} sx={{ width: 140, height: 140 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{profileData.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {profileData.age} yrs | {profileData.height}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profileData.religion} | {profileData.caste} | {profileData.motherTongue}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profileData.education} | {profileData.profession}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profileData.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profileData.phone}{' '}
                <CheckCircleIcon sx={{ fontSize: 'small', color: 'green', verticalAlign: 'middle', ml: 0.5 }} /> Verified
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profileData.email}{' '}
                <CheckCircleIcon sx={{ fontSize: 'small', color: 'green', verticalAlign: 'middle', ml: 0.5 }} /> Verified
              </Typography>
            </Box>
            <Box>
              <Button variant="outlined" sx={{ bgcolor: '#ffb000', color: 'black', borderRadius: '13px' }} size="small">
                Try Premium
              </Button>
            </Box>
          </Box>

          {/* About Me */}
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">About Me</Typography>
            <Button size="small">Edit</Button>
          </Box>

          <Typography variant="body2" color="text.secondary" mb={1}>
            {profileData.aboutMe}
          </Typography>
        </Box>

        {/* Basic Details */}
        <Box sx={{ border: '1px solid #c1ddb3', mt: 2, p: 2, borderRadius: '10px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Basic Details</Typography>
            <Button size="small">Edit</Button>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {profileData.basicDetails.map((detail, index) => {
              const [key, value] = Object.entries(detail)[0];
              return (
                <Box key={index} sx={{ width: { xs: '100%', sm: '48%' }, display: 'flex', gap: 1 }}>
                  <Typography fontWeight="bold">{key}:</Typography>
                  <Typography>{value}</Typography>
                </Box>
              );
            })}
          </Box>

          <Divider sx={{ border: '0.7px solid #b2b2b2', my: 2 }} />

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {profileData.CastDetails.map((detail, index) => {
              const [key, value] = Object.entries(detail)[0];
              return (
                <Box key={index} sx={{ width: { xs: '100%', sm: '48%' }, display: 'flex', gap: 1 }}>
                  <Typography fontWeight="bold">{key}:</Typography>
                  <Typography>{value}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;                                           