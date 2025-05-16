import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoImage from "../images/Mangalyam_text.png"; // replace with actual logo path
import profileReadyImg from "../images/Profileready.png"; // replace with actual image path

const ProfileReady = () => {
const navigate = useNavigate()
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="flex-start"
    minHeight="100dvh" // Mobile-safe viewport height
    bgcolor="#fff"
    sx={{ pt: '80px', boxSizing: 'border-box' }}
  >
      <Box
        maxWidth={400}
        width="100%"
        textAlign="center"
        boxShadow={3}
        borderRadius={2}
        p={3}
        bgcolor="#fff"
      >
        {/* Logo */}
        <Box component="img" src={logoImage} alt="Mangalyam" sx={{ height: 40, mb: 2 }} />

        {/* Welcome Text */}
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Welcome to <Box component="span" color="#f6b301">MANGALYAM</Box>
        </Typography>

        {/* Image */}
        <Box
          component="img"
          src={profileReadyImg}
          alt="Profile Ready"
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            borderRadius: 2,
            mb: 2
          }}
        />

        {/* Congratulations Text */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Congratulations! Your Profile is Ready!
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Congratulations! Your profile is ready. Join our vibrant community and start your journey to find the perfect match now!
        </Typography>

        {/* Button */}
        <Button
          onClick={() => navigate("/main")}
          variant="contained"
          fullWidth
          sx =  {{
            backgroundColor: "#f6b301",
            color: "#fff",
            borderRadius: "6px",
            textTransform: "none",
            fontWeight: "bold",
            py: 1.2,
            fontSize: "14px",
            ":hover": {
              backgroundColor: "#e5a800",
            },
          }}
        >
          Start Browsing Matches
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileReady;
