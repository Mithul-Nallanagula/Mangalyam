import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logoImage from "../images/Mangalyam_text.png";
import coupleImage from "../images/professional.png";

const ProfessionalDetails = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const initialForm = {
    highestEducation: "B Tech",
    courseName: "MEC",
    collegeName: "JNTU",
    occupation: "Software Developer",
    annualIncome: "10 LPA",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePrevious = () => {
    navigate("/personal-details"); // Assuming this is the correct previous page
  };

  const handleNext = () => {
    console.log("Navigating with Professional Details:", formData);
    navigate("/Addphotos", { state: formData }); // Assuming this is the next page
  };

  return (
    <Box display="flex" flexDirection={isSmallScreen ? "column" : "row"} height={isSmallScreen ? "100dvh" : "100vh"}>
      {/* Left Side: Form */}
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
          <Box component="img" src={logoImage} alt="Maangalyam Logo" sx={{ height: 50, mt: { xs: "100px", md: "0px" }, mb: 2 }} />
          <Typography variant="h6" fontWeight="bold" alignSelf="flex-start">Professional Details</Typography>
          <Typography variant="body2" color="text.secondary" mb={3} alignSelf="flex-start">
            Let’s Personalize Your Matrimony Brand
          </Typography>

          {/* Highest Education */}
          <FormControl fullWidth margin="normal" size="small">
            <InputLabel id="highest-education-label">Highest Education</InputLabel>
            <Select
              labelId="highest-education-label"
              id="highest-education"
              name="highestEducation"
              value={formData.highestEducation}
              onChange={handleChange}
              label="Highest Education"
            >
              <MenuItem value="B Tech">B Tech</MenuItem>
              <MenuItem value="M Tech">M Tech</MenuItem>
              <MenuItem value="MBA">MBA</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>

          {/* Course Name */}
          <TextField
            label="Course Name"
            fullWidth
            margin="normal"
            size="small"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
          />

          {/* College Name */}
          <TextField
            label="College Name"
            fullWidth
            margin="normal"
            size="small"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
          />

          {/* Occupation */}
          <TextField
            label="Occupation"
            fullWidth
            margin="normal"
            size="small"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          />

          {/* Annual Income */}
          <FormControl fullWidth margin="normal" size="small">
            <InputLabel id="annual-income-label">Annual Income</InputLabel>
            <Select
              labelId="annual-income-label"
              id="annual-income"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              label="Annual Income"
            >
              <MenuItem value="5 LPA">5 LPA</MenuItem>
              <MenuItem value="10 LPA">10 LPA</MenuItem>
              <MenuItem value="15 LPA">15 LPA</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>

          {/* Navigation Buttons */}
          <Box display="flex" gap={2} mt={3} width="100%">
            <Button fullWidth variant="outlined" sx={{ borderColor: "#ccc" }} onClick={handlePrevious}>
              Previous
            </Button>
            <Button
              onClick={handleNext}
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#f6b301", color: "#fff" }}
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

export default ProfessionalDetails;