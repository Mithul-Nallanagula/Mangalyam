import { Box, Avatar, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import user from '../images/user5.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const User = () => {
  

  return (
    <Box
      sx={{
        width: { xs: '95%', sm: '400px' },
        mx: 'auto',
        mt:{xs:9,md:0},
        p: { xs: 1.5, sm: 2 },
        maxHeight: '70vh',
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: 'white',
      }}
    >
      {/* Avatar and Basic Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Avatar
          src={user}
          sx={{
            width: { xs: 70, sm: 80 },
            height: { xs: 70, sm: 80 },
            border: '3px solid #f9a825',
            mb: 1,
          }}
        />
        <Typography fontWeight="bold" fontSize={{ xs: 15, sm: 16 }}>
          Sravani Reddykonda
        </Typography>
        <Typography fontSize={{ xs: 13, sm: 14 }} color="text.secondary">
          26 yrs | 5ft 6in
        </Typography>
        <Typography fontSize={{ xs: 12, sm: 13 }} color="text.secondary">
          Caste | Sub-Caste | Religion
        </Typography>
        <Typography fontSize={{ xs: 12, sm: 13 }} color="text.secondary">
          Occupation
        </Typography>

        <Button
          startIcon={<EditIcon sx={{ fontSize: 16 }} />}
          sx={{
            mt: 1,
            fontSize: { xs: 13, sm: 14 },
            textTransform: 'none',
            color: '#f9a825',
            fontWeight: 500,
            p: 0,
            minWidth: 'auto',
          }}
        >
          Edit
        </Button>
      </Box>

      {/* Placeholder box */}
      {/* <Box
        sx={{
          mt: 2,
          height: 50,
          bgcolor: '#fff3e0',
          borderRadius: 1,
        }}
      /> */}

      {/* Menu Options */}
      <Box sx={{ mt: 2 }}>
        {[
          {
            label: 'Profile Verification',
            icon: <VerifiedUserIcon sx={{ color: '#004d40' }} />,
          },
          {
            label: 'Settings',
            icon: <SettingsIcon sx={{ color: '#004d40' }} />,
          },
          {
            label: 'Help',
            icon: <HelpOutlineIcon sx={{ color: '#004d40' }} />,
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: '#f1f8e9',
              borderRadius: 1,
              p: { xs: 1, sm: 1.2 },
              mb: 1,
              cursor: 'pointer',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {item.icon}
              <Typography fontSize={{ xs: 13, sm: 14 }}>{item.label}</Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ fontSize: 16, color: '#aaa' }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default User;
