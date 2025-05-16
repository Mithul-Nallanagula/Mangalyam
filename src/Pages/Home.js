import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Container,
} from '@mui/material';
import Advsearch from '../Components/Advsearch';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../Components/Journey';
import TestimonialSection from '../Components/testimonials';

import img1 from '../images/Frame 48096482.png';
import img2 from '../images/Frame 48096484.png';
import img3 from '../images/Frame 48096485.png';
import img4 from '../images/Frame 48096486.png';
import img5 from '../images/Frame 48096487.png';
import img6 from '../images/Frame 48096488.png';
import img7 from '../images/Frame 48096490.png';
import img8 from '../images/Frame 48096491.png';
import img9 from '../images/Frame 48096493.png';
import img10 from '../images/Frame 48096494.png';
import img11 from '../images/Frame 48096495.png';
import virus from '../images/virus.png';
import shield from '../images/shield.png';
import search from '../images/search.png';
import human from '../images/human.png';
import vector from '../images/Vector.png';
import chat from '../images/chat.png';

const genders = ['Male', 'Female'];
const ages = ['All', '18-25', '26-35', '36-45', '46+'];
const religions = ['Hindu', 'Muslim', 'Christian', 'Other'];
const motherTongues = ['Hindi', 'Tamil', 'Telugu', 'Malayalam'];

const pyramidImages = [
  [img1, img2, img3],
  [img4, img5, img6, img7],
  [img8, img9, img10, img11, img2],
];

const features = [
  {
    icon: virus,
    title: "Precision Matchmaking at Your Fingertips",
    description:
      "Experience matchmaking like never before. Our platform employs sophisticated algorithms and detailed criteria to ensure you connect with individuals who share your values, interests, and aspirations.",
  },
  {
    icon: shield,
    title: "Verified Profiles for Trusted Connections",
    description:
      "Your safety is our priority. Every profile on our platform undergoes a rigorous verification process to assure that you're connecting with genuine, like-minded individuals.",
  },
  {
    icon: search,
    title: "Tailored Search, Tailored Results",
    description:
      "Customize your search for love with our comprehensive filter options. Fine-tune your preferences to ensure that every match aligns with your unique criteria.",
  },
  {
    icon: human,
    title: "Success Stories That Inspire",
    description:
      "Join the ranks of those who found love on our platform. Explore real-life success stories and testimonials from couples who embarked on their journey with us.",
  },
  {
    icon: vector,
    title: "Your Privacy, Your Control",
    description:
      "Take charge of your online journey with our robust privacy controls. Manage who sees your profile and choose the level of information you share.",
  },
  {
    icon: chat,
    title: "Stay Connected with Seamless Messaging",
    description:
      "Our intuitive messaging platform lets you connect effortlessly with potential matches — from icebreakers to heartfelt conversations.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'white' }}>
      {/* Hero Section with Background and Form */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '120vh',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          overflow: 'hidden',
          pt: { xs: 4, sm: 8 },
          pb: { xs: 20, sm: 24 },
        }}
      >
        {/* Background Pyramid Images */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            zIndex: 1,
            pb: 4,
          }}
        >
          {pyramidImages.map((row, index) => {
            const rowOpacity = [0.6, 0.3, 0.2][index];
            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  gap: 3,
                  justifyContent: 'center',
                  flexWrap: 'nowrap',
                  opacity: rowOpacity,
                }}
              >
                {row.map((src, i) => (
                  <Box
                    key={i}
                    component="img"
                    src={src}
                    alt={`couple-${index}-${i}`}
                    sx={{
                      width: { xs: 150, sm: 200, md: 240 },
                      height: 'auto',
                      borderRadius: 2,
                      objectFit: 'cover',
                      boxShadow: 2,
                    }}
                  />
                ))}
              </Box>
            );
          })}
        </Box>

        {/* Centered Content Inside Container */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          {/* Headings */}
          <Box sx={{ textAlign: 'center', mb: 4, mt: 7 }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 1,
                fontSize: {
                  xs: '23px',
                  sm: '2.25rem',
                  md: '2.7rem',
                },
              }}
            >
              Maangalyam: Where Love Finds its Forever
            </Typography>
            <Typography
              sx={{
                color: '#444',
                mb: 2,
                fontWeight: 400,
                fontSize: {
                  xs: '15px',
                  sm: '1.125rem',
                  md: '1.25rem',
                },
              }}
            >
              Discover Endless Possibilities in Your Matrimony Journey
            </Typography>
            <Button
              variant="outlined"
              onClick={() => navigate("/login")}
              sx={{
                color: 'white',
                backgroundColor: 'black',
                fontWeight: 300,
                border: '1px solid white',
              }}
            >
              Start your journey
            </Button>
          </Box>

          {/* Form */}
          <Box
            sx={{
              backgroundColor: '#000',
              borderRadius: 3,
              padding: { xs: 2, sm: 4 },
              width: '100%',
              maxWidth: 600,
              mx: 'auto',
              mt: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              gap: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: '#fff', fontWeight: 'bold' }}
            >
              Let's Get Started
            </Typography>

            {/* Row 1 */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <TextField
                select
                label="Looking for"
                fullWidth
                sx={{ flex: 1, backgroundColor: '#fff' }}
              >
                {genders.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Age"
                fullWidth
                sx={{ flex: 1, backgroundColor: '#fff' }}
              >
                {ages.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {/* Row 2 */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <TextField
                select
                label="Religion"
                fullWidth
                sx={{ flex: 1, backgroundColor: '#fff' }}
              >
                {religions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Mother Tongue"
                fullWidth
                sx={{ flex: 1, backgroundColor: '#fff' }}
              >
                {motherTongues.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {/* Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FFC107',
                  color: '#000',
                  fontWeight: 'bold',
                  px: { xs: 0, sm: 4 },
                  py: 1,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    backgroundColor: '#e0a800',
                  },
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ADVANCED SEARCH */}
      <Container maxWidth="lg">
        <Advsearch />
      </Container>

      {/* FEATURES SECTION */}
      <Container maxWidth="lg">
        <Box sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "#F59E0B", fontWeight: 600 }}>
            FEATURE HIGHLIGHTS
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 1 }}>
            Unveiling the Heart of Our Platform
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, maxWidth: 600, mx: "auto" }}>
            Unlock the Door to Love: Register Now for a Journey of Connections and Compatibility.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
              mt: 6,
            }}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 300px",
                  maxWidth: "320px",
                  borderRadius: 4,
                  p: 3,
                  textAlign: "left",
                }}
              >
                <Box sx={{
                  height: '80px',
                  width: '80px',
                  bgcolor: '#fff7e5',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    style={{ width: 35, height: 40, marginBottom: 8 }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* TESTIMONIALS + REGISTRATION */}
      <Container maxWidth="lg">
        <TestimonialSection />
        <RegistrationForm />
      </Container>
    </Box>
  );
}
