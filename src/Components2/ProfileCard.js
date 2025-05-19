import React  from "react";
import { Box, Typography, Button } from '@mui/material';

import chatlogo from "../images/chatlogo.png"
import star from '../images/star.png';




const ProfileCard = ({ profile , feavorite , button }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      bgcolor: '#fff',
      borderRadius: 2,
      p: 2,
      


      Width: '  100px',
      height: '20vh',
      boxShadow: 2,
      alignItems: 'center',

    }}
  >
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Box
        component='img'
        src={profile.image}

        sx={{
          width:{xs:80,md: 120},
          objectFit: 'cover',
          height: {xs:80,md: 120},


        }}
      />
      <Box>
        <Typography fontWeight="bold">{profile.name}</Typography>
        <Typography fontSize={14} color="text.secondary">
          {profile.age} yrs | {profile.height}
        </Typography>
        <Typography fontSize={13} color="text.secondary">
          {profile.caste}  | {profile.religion}
        </Typography>
        <Typography fontSize={13} color="text.secondary">
          {profile.occupation}
        </Typography>
      </Box>
    </Box>

    <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>

      <Box variant="h5" color="warning" sx={{ marginBottom: '10px ',fontSize:'10px', display: 'flex', alignItems: 'center' }}>
        Premium
        <Box sx={{ ml: '10px' }} component="img" src={star} />
      </Box>

      { button === 0 && ( <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          size="small"
          sx={{
            bgcolor: '#ffb000',
            color: 'white',
            width: {xs:80,md: 100}, // Set fixed width
            textTransform: 'none',
          }}
        >
          Interested
        </Button>

        <Button
          size="small"
          sx={{
            mt: 1,
            bgcolor: '#e2e1de',
            color: '#000',
            width: {xs:80,md: 100}, // Match width to above
            textTransform: 'none',
          }}
        >
          {feavorite}
        </Button>

      </Box>)}
      { button === 1 && ( <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          size="small"
          sx={{
            bgcolor: '#ffb000',
            color: 'white',
            width: 100, // Set fixed width
            textTransform: 'none',
            fontFamily: 'Lato, sans-serif'
          }}
        >
          Chat <Box component='img' sx={{ml:"2px"}} src={chatlogo} />
        </Button>

        <Button
          size="small"
          sx={{
            mt: 1,
            bgcolor: '#ff6b6b',
            color: '#fff',
            width: 100, // Match width to above
            textTransform: 'none',
            fontFamily: 'Lato, sans-serif'
          }}
        >
          Not Interested
        </Button>

      </Box>)}
    </Box>
  </Box>
);

export default ProfileCard;