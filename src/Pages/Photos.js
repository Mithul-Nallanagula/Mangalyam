import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import logoImage from "../images/Mangalyam_text.png";
import coupleImage from "../images/Personal.png"; // Using the same image as before for consistency

const AddPhotos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [photos, setPhotos] = useState([]);
  const maxPhotos = 9; // Maximum number of photos allowed

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && photos.length < maxPhotos) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos([...photos, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    console.log("Navigating with Photos:", photos);
    navigate("/otp-verification", { state: { ...location.state, photos } });
  };

  const handleSkip = () => {
    navigate("/otp-verification", { state: location.state });
  };

  const handleDeletePhoto = (indexToDelete) => {
    setPhotos(photos.filter((_, index) => index !== indexToDelete));
  };

  const renderAddButton = (index) => (
    <Box
      key={`add-button-${index}`}
      sx={{
        width: 100,
        height: 100,
        border: '1px dashed #ccc',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton component="label">
        <AddIcon />
        <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
      </IconButton>
    </Box>
  );

  const renderImageWithDelete = (photo, index) => (
    <Box
      key={`photo-${index}`}
      sx={{
        width: 100,
        height: 100,
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box component="img" src={photo} alt={`Uploaded ${index + 1}`} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <IconButton
        onClick={() => handleDeletePhoto(index)}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          color: 'rgba(0, 0, 0, 0.6)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          padding: '4px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
          },
        }}
        size="small"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  );

  return (
    <Box display="flex" flexDirection={isSmallScreen ? "column" : "row"} height={isSmallScreen ? "100dvh" : "100vh"}>
      {/* Left Side: Add Photos */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#fff"
        p={3}
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Box width="100%" maxWidth="400px" display="flex" flexDirection="column" alignItems="center" mt={{ xs: 0, md: 10 }}>
          <Box component="img" src={logoImage} alt="Maangalyam Logo" sx={{ height: 50, mt: { xs: "0px", md: "0px" }, mb: 2 }} />
          <Typography variant="h6" fontWeight="bold" alignSelf="flex-start">Add Photos</Typography>
          <Typography variant="body2" color="text.secondary" mb={3} alignSelf="flex-start">
            Elevate your profile with up to {maxPhotos} photos for greater visibility and better connections.
          </Typography>

          <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%" mb={3}>
            {[...Array(Math.ceil((photos.length + 1) / 3))].map((_, rowIndex) => (
              <Box key={`row-${rowIndex}`} display="flex" flexDirection="row" gap={2} mb={2}>
                {Array.from({ length: 3 }).map((__, colIndex) => {
                  const index = rowIndex * 3 + colIndex;
                  if (photos[index]) {
                    return renderImageWithDelete(photos[index], index);
                  } else if (index === photos.length && photos.length < maxPhotos) {
                    return renderAddButton(index);
                  }
                  return null;
                })}
              </Box>
            ))}
          </Box>

          {/* Navigation Buttons */}
          <Box display="flex" gap={2} mt={3} width="100%">
            <Button fullWidth variant="outlined" sx={{ borderColor: "#ccc" }} onClick={handleSkip}>
              Skip
            </Button>
            <Button
              onClick={handleNext}
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#f6b301", color: "#fff" }}
              disabled={photos.length === 0}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Right Side: Image */}
      {!isSmallScreen && (
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" position="relative" sx={{ bgcolor: "#f9f9f9", mt: "50px" }}>
          <Box component="img" src={coupleImage} alt="Couple" mr={10} sx={{ width: "70%", maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
          <Box
            position="absolute"
            bottom={160}
            right={3}
            bgcolor="#ffb000"
            color="#fff"
            height={60}
            width={450}
            px={4}
            py={1}
            borderRadius="4px"
            fontWeight="bold"
            fontSize="20px"
          >
            Lorem Ipsum is simply dummy text .
          </Box>    
        </Box>
      )}
    </Box>
  );
};

export default AddPhotos;