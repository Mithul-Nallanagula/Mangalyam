import React from 'react';
import { Box, Container, Typography, Button , useTheme, useMediaQuery} from '@mui/material';
import AdvancedSearch from '../Components2/Advsearch.js';
import flag from '../images/flag.png';
import women from '../images/women.png';
import message from '../images/message.png';
import star from '../images/star.png';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import user from '../images/user5.png';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import ProfileCard from '../Components2/User.js';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';
import frame from '../images/frame.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const profiles = [
    { id: 1, name: 'Sravani', age: 26, height: "5'6\"", religion: 'Christian', caste: 'Reddy', occupation: 'Software Engineer', image: user },
    { id: 2, name: 'Meghorie', age: 24, height: "5'4\"", religion: 'Hindu', caste: 'Nair', occupation: 'Doctor', image: user1 },
    { id: 3, name: 'Courtney', age: 28, height: "5'8\"", religion: 'Christian', caste: 'Catholic', occupation: 'Teacher', image: user2 },
    { id: 4, name: 'Darlene', age: 22, height: "5'2\"", religion: 'Muslim', caste: 'Sunni', occupation: 'Student', image: user3 },
    { id: 5, name: 'Greg', age: 29, height: "5'10\"", religion: 'Christian', caste: 'Reddy', occupation: 'Engineer', image: user4 },
    { id: 6, name: 'Greg', age: 29, height: "5'10\"", religion: 'Christian', caste: 'Reddy', occupation: 'Engineer', image: user1 },
    { id: 7, name: 'Greg', age: 29, height: "5'10\"", religion: 'Christian', caste: 'Reddy', occupation: 'Engineer', image: user },
    { id: 8, name: 'Greg', age: 29, height: "5'10\"", religion: 'Christian', caste: 'Reddy', occupation: 'Engineer', image: user4 },
];

function Main() {
    
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ mt: 9 }}>
            <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                <AdvancedSearch />
                <Box sx={{ width: { xs: '100%', md: '70%' } }}>

                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: { md: 'scroll', xs: 'auto' },
                            // Enables vertical scroll
                            overflowX: 'hidden', // Hides horizontal scroll
                            maxHeight: { md: '82.5vh', xs: 'auto' },

                            width: { xs: '100%', md: '600px' },

                            borderRadius: 2,
                            p: {xs:0,md:2},
                            '&::-webkit-scrollbar': {
                                display: 'none', // Hides scrollbar in WebKit browsers (Chrome, Safari)
                            },
                            scrollbarWidth: 'none', // Hides scrollbar in Firefox
                            msOverflowStyle: 'none', // Hides scrollbar in IE/Edge
                        }}
                    >
                        {/* Top Stats */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'row', sm: 'row' },
                                flexWrap: 'wrap',

                                gap: 1,
                                borderRadius: 2,
                                p: {xs:0,md:2},
                                width: { xs: '100%', md: '46vw' },
                            }}
                        >
                            {[{ img: flag, title: 'My Favorites', count: 32 },
                            { img: women, title: 'Profile Interests', count: 120 },
                            { img: message, title: 'Messages', count: '320+' }].map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        flex: 1,
                                        maxWidth: { xs: '20%', sm: '150px', md: '150px' },
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        border: '2px solid #E2D7D7',
                                        p: {xs:2, md:2},
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                    }}
                                >
                                    <Box>
                                        <Box component="img" src={item.img} alt={item.title} sx={{ width: 30, height: 30, mb: 1 }} />
                                        <Typography variant="subtitle2" color="text.secondary">{item.title}</Typography>

                                        <Typography variant="h6" fontWeight="bold">{item.count}</Typography>

                                    </Box>
                                    <ArrowForwardIosIcon sx={{ fontSize: 'small', color: 'text.secondary' }} />
                                </Box>
                            ))}
                        </Box>

                        {/* Progress Box */}
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
                                width: { xs: '90%', md: '43vw' },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:{xs:'column' , md:'row                 '}, gap: 2 }}>
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
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#f9a825',
                                    color: '#fff',
                                    fontSize: '10px',
                                    borderRadius: 2,
                                    height: 35,
                                    width: 120,
                                }}
                            >
                                Complete Now
                            </Button>
                        </Box>

                        {/* Section Header */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: 3,
                                width: { xs: '90%', md: '44vw' },
                                px: 1,
                            }}
                        >
                            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: {md:"20px", xs: "16px"} }}>Based on your preference</Typography>
                            <Typography variant="h6" sx={{ color: '#f9a825', fontSize: {md:"12px", xs: "12px"}, fontWeight: 'bold' }}>
                                View All
                            </Typography>
                        </Box>

                        {/* Profile Cards Grid */}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr ', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                                gap: 1,
                                mt: 1,
                                width: { xs: '90%', md: '44vw' },
                                px: 1,
                            }}
                        >
                            {profiles.slice(0, 4).map((profile) => (
                                <Box
                                    key={profile.id}
                                    sx={{
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                        border: '1px solid #E0E0E0',

                                        p: 1,
                                        textAlign: 'center',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={profile.image}
                                        alt={profile.name}
                                        sx={{
                                            width: { xs: 250, sm: 120, md: 120 },
                                            height: { xs: 200, sm: 100, md: 100 },
                                            borderRadius: '5%',
                                            objectFit: 'cover',
                                            mb: 1,
                                            mx: 'auto',
                                        }}
                                    />
                                    <Typography fontWeight="bold" fontSize="16px">{profile.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {profile.age} yrs | {profile.height}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">{profile.caste}</Typography>
                                    <Typography variant="body2" color="text.secondary">{profile.occupation}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: 3,
                                width: { xs: '90%', md: '44vw' },
                                px: 1,
                            }}
                        >
                            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: {md:"20px", xs: "16px"} }}>Based on your preference</Typography>
                            <Typography variant="h6" sx={{ color: '#f9a825', fontSize: {md:"12px", xs: "14px"}, fontWeight: 'bold' }}>
                                View All
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr ', sm: '1fr 1fr' },
                                gap: 2,
                                mt: 2,
                                width: { xs: '100%', md: '44vw' },
                            }}
                        >
                            {profiles.slice(0, 6).map((profile) => (
                                <Box
                                    key={profile.id}
                                    sx={{
                                        display: 'flex',
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                        border: '1px solid #E0E0E0',
                                        p: 1.5,
                                        gap: 2,
                                        position: 'relative',
                                        alignItems: 'center',
                                    }}
                                >
                                    {/* Profile Image */}
                                    <Box
                                        component="img"
                                        src={profile.image}
                                        alt={profile.name}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: 2,
                                            objectFit: 'cover',
                                        }}
                                    />

                                    {/* Profile Info */}
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant='body1' fontWeight="600">{profile.name}</Typography>
                                        <Typography variant="body2" sx={{ fontSize: '12px' }} color="text.secondary">
                                            {profile.age} yrs | {profile.height}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '12px' }} color="text.secondary">
                                            Religion | {profile.caste}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '12px' }} color="text.secondary">
                                            Study | {profile.occupation}
                                        </Typography>
                                        <Typography

                                            variant="body2"
                                            sx={{ color: '#f9a825', fontSize: '12px', fontWeight: 'bold', mt: 1 }}
                                        >
                                            View Profile
                                        </Typography>
                                    </Box>

                                    {/* Badge Icon */}
                                    <Box
                                        component="img"
                                        src={star}
                                        alt="badge"
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            position: 'absolute',
                                            top: 8,
                                            right: 8,
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>

                        <Box
                            sx={{
                                mt: 1,
                                maxWidth: '580px',
                                borderRadius: 2,
                                p: 3,
                                minHeight: '140px',
                                backgroundImage: `url(${frame})`, // Replace with your actual image path
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'space-between',
                                alignItems: { md: 'end', xs: 'center' },
                                paddingBottom: { xs: 2, md: 4 },
                                color: 'white',
                            }}
                        >
                            {/* Left Section: Heading + Bullet Points */}
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6" fontWeight="bold" textAlign={{ xs: 'center', md: 'left' }} fontSize="20px">
                                    Try Premium
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' },


                                    }}
                                >
                                    {[
                                        'Lorem ipsum dolor sit amet.',
                                        'Consectetur adipiscing.',
                                        'Elit, sed do eiusmod tempor.',
                                        'Incididunt ut labore.',
                                        'Lorem ipsum dolor sit amet.',
                                        'Consectetur adipiscing.',
                                    ].map((text, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginTop: "4px" }}>
                                            <TaskAltIcon sx={{ color: 'white', fontSize: {xs:5,md:16} }} />
                                            <Typography variant="body2" sx={{fontSize:'11px'}}>{text}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Right Section: Button */}
                            <Button gap={1}
                                variant="contained"
                                sx={{
                                    mt: { xs: 3, md: 0 },
                                    backgroundColor: '#f9a825',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    whiteSpace: 'nowrap',
                                    alignSelf: { xs: 'flex-center', md: 'end' },
                                }}
                            >
                                Get Premium
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: 3,
                                width: { xs: '100%', md: '44vw' },
                                px: 1,
                            }}
                        >
                            <Typography variant="h6" fontWeight="bold" fontSize="15px">All Matches</Typography>
                            <Typography variant="h6" sx={{ color: '#f9a825', fontSize: '12px', fontWeight: 'bold' }}>
                                View All
                            </Typography>
                        </Box>

                        {/* Profile Cards Grid */}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                                gap: 1,
                                mt: 1,
                                width: { xs: '100%', md: '44vw' },
                                px: 1,
                            }}
                        >
                            {profiles.slice(0, 4).map((profile) => (
                                <Box
                                    key={profile.id}
                                    sx={{
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                        border: '1px solid #E0E0E0',

                                        p: 1,
                                        textAlign: 'center',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={profile.image}
                                        alt={profile.name}
                                        sx={{
                                            width: 120,
                                            height: 100,
                                            borderRadius: '5%',
                                            objectFit: 'cover',
                                            mb: 1,
                                            mx: 'auto',
                                        }}
                                    />
                                    <Typography fontWeight="bold" fontSize="16px">{profile.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {profile.age} yrs | {profile.height}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">{profile.caste}</Typography>
                                    <Typography variant="body2" color="text.secondary">{profile.occupation}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: 3,
                                width: { xs: '100%', md: '44vw' },
                                px: 1,
                            }}
                        >
                            <Typography variant="h6" fontWeight="bold" fontSize="15px">Near By Location</Typography>
                            <Typography variant="h6" sx={{ color: '#f9a825', fontSize: '12px', fontWeight: 'bold' }}>
                                View All
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                gap: 2,
                                mt: 2,
                                width: { xs: '100%', md: '44vw' },
                            }}
                        >
                            {profiles.slice(0, 4).map((profile) => (
                                <Box
                                    key={profile.id}
                                    sx={{
                                        display: 'flex',
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                        border: '1px solid #E0E0E0',
                                        p: 1.5,
                                        gap: 2,
                                        position: 'relative',
                                        alignItems: 'center',
                                    }}
                                >
                                    {/* Profile Image */}
                                    <Box
                                        component="img"
                                        src={profile.image}
                                        alt={profile.name}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: 2,
                                            objectFit: 'cover',
                                        }}
                                    />

                                    {/* Profile Info */}
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant='body1' fontWeight="600">{profile.name}</Typography>
                                        <Typography variant="body2" sx={{ fontSize: '12px' }} color="text.secondary">
                                            {profile.age} yrs | {profile.height}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '12px' }} color="text.secondary">
                                            Religion | {profile.caste}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '12px' }} color="text.secondary">
                                            Study | {profile.occupation}
                                        </Typography>
                                        <Typography

                                            variant="body2"
                                            sx={{ color: '#f9a825', fontSize: '12px', fontWeight: 'bold', mt: 1 }}
                                        >
                                            View Profile
                                        </Typography>
                                    </Box>

                                    {/* Badge Icon */}
                                    <Box
                                        component="img"
                                        src={star}
                                        alt="badge"
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            position: 'absolute',
                                            top: 8,
                                            right: 8,
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>

                    </Box>

                </Box>

                {
                    !isMobile ? <ProfileCard /> : null
                }
                
            </Container>
        </Box>
    );
}

export default Main;
