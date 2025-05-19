import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Grid } from '@mui/material';
import AdvancedSearch from '../Components2/Advsearch';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';
import user5 from '../images/user5.png';
import user6 from '../images/user6.png';
import ProfileCard from '../Components2/ProfileCard';

// Sample data
const verifiedProfiles = [
  {
    name: 'Greg',
    age: 28,
    height: "5'10\"",
    caste: 'Christian',
    subCaste: 'Latin',
    religion: 'Christian',

    occupation: 'Software Engineer',
    image: user1,
  },
  {
    name: 'Gladys',
    age: 26,
    height: "5'6\"",
    caste: 'Catholic',
    subCaste: 'Latin',
    religion: 'Christian',
    occupation: 'Doctor',
    image: user2,
  },
  {
    name: 'Clara',
    age: 27,
    height: "5'4\"",
    caste: 'Orthodox',
    subCaste: 'Malankara',
    religion: 'Christian',
    occupation: 'Lawyer',
    image: user3,
  },
  {
    name: 'Cornis',
    age: 30,
    height: "5'8\"",
    caste: 'Protestant',
    subCaste: 'Evangelical',
    religion: 'Christian',
    occupation: 'Marketing',
    image: user4,
  },
  {
    name: 'Wendy',
    age: 29,
    height: "5'5\"",
    caste: 'Catholic',
    subCaste: 'Roman',
    religion: 'Christian',
    occupation: 'UI/UX Designer',
    image: user1,
  },
  {
    name: 'Jane',
    age: 25,
    height: "5'3\"",
    caste: 'Christian',
    subCaste: 'Syro Malabar',
    religion: 'Christian',
    occupation: 'HR Specialist',
    image: user5,
  },
  {
    name: 'Irma',
    age: 31,
    height: "5'7\"",
    caste: 'Pentecostal',
    subCaste: 'AG',
    religion: 'Christian',
    occupation: 'Project Manager',
    image: user6,
  },
  {
    name: 'Brenda',
    age: 24,
    height: "5'2\"",
    caste: 'Catholic',
    subCaste: 'Latin',
    religion: 'Christian',
    occupation: 'Architect',
    image: user2,
  },


];






// Component for main profile card


// Mini profile card
const MiniProfileCard = ({ profile }) => (
<Box sx={{ display: 'flex', flexDirection: 'column', minWidth: {xs:"120px",md:'150px'}, justifyContent: 'center', border: '1px solid #e2e1de', bgcolor: '#fafafa', borderRadius: '7px', padding: '10px', gap: 2, alignItems: 'center' }}>
    <Box
      component='img'
      src={profile.image}

      sx={{
        width: {xs:100,md:130},
        objectFit: 'cover',
        height: {xs:100,md:130},


      }}
    />
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Typography fontWeight="bold">{profile.name}</Typography>
      <Typography fontSize={13} color="text.secondary">
        {profile.age}yrs |{profile.height}in
      </Typography>
      <Typography fontSize={13} color="text.secondary">
        {profile.caste}
      </Typography>


      <Typography fontSize={13} color="text.secondary">
        {profile.occupation}
      </Typography>
    </Box>
  </Box>
);

const MatchesPage = () => {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 2, gap: 2 }}>
      <AdvancedSearch />

      <Box sx={{ flex: 1 }}>
        <Typography fontWeight="bold" mb={1} sx={{ mt:{xs:5,md:10}}}>
          200 Matches based on your preference
        </Typography>

        <Tabs value={tab} sx={{ mb: 2, bgcolor: '#edebec' }}>
          <Tab label="All" onClick={() => setTab(0)} />
          <Tab label="Favorites" onClick={() => setTab(1)} />
          <Tab label="Interests" onClick={() => setTab(2)} />
        </Tabs>

        {tab === 0 && (
          <>
            <Typography fontWeight="bold" mb={1}>Verified</Typography>
            <Grid container spacing={2}>
              {verifiedProfiles.map((profile, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <ProfileCard profile={profile} feavorite = {"Fevorite"} button={0}/>
                </Grid>
              ))}
            </Grid>

            <Typography fontWeight="bold" mt={4} mb={1}>Based on your preference</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {verifiedProfiles.slice(0, 4).map((profile, i) => (
                <MiniProfileCard key={i} profile={profile}  />
              ))}
            </Box>

            <Typography fontWeight="bold" mt={4} mb={1}>All Matches</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {verifiedProfiles.slice(0, 6).map((profile, i) => (
                <MiniProfileCard key={i} profile={profile}  />
              ))}
            </Box>
          </>
        )}

        {tab === 1 && (
          <>
            <Typography fontWeight="bold" mb={2}>Your Favorite Profiles</Typography>
            <Grid container spacing={2}>
              {verifiedProfiles.slice(0, 4).map((profile, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <ProfileCard profile={profile} feavorite = {"Un-Fevorite"} button={0} />
                </Grid>
                
              ))}
            </Grid>
            <Typography fontWeight="bold" mt={4} mb={1}>Based on your preference</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {verifiedProfiles.slice(0, 4).map((profile, i) => (
                <MiniProfileCard key={i} profile={profile} />
              ))}
            </Box>
          </>
        )}

        {tab === 2 && (
          <>
            <Typography fontWeight="bold" mb={2}>Profiles You're Interested In</Typography>
            <Grid container spacing={2}>
              {verifiedProfiles.slice(3, 7).map((profile, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <ProfileCard profile={profile} button = {1}/>
                </Grid>

              ))}
            </Grid>
            <Typography fontWeight="bold" mt={4} mb={1}>Based on your preference</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {verifiedProfiles.slice(0, 6).map((profile, i) => (
                <MiniProfileCard key={i} profile={profile} />
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default MatchesPage;