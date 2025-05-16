import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logoImage from "../images/Mangalyam_text.png";
import coupleImage from "../images/CoupleImage.png";

const BasicDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const initialForm = {
    profile: location.state?.profile || "",
    gender: location.state?.gender || "",
    firstName: location.state?.firstName || "",
    secondName: location.state?.secondName || "",
    phone: location.state?.phone || "",
    email: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.profile) newErrors.profile = "Profile is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.secondName.trim()) newErrors.secondName = "Second name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain '@'";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigate("/address-details");
    }
  };

  return (
    <Box display="flex" flexDirection={isSmallScreen ? "column" : "row"} height={isSmallScreen ? "100dvh" : "100vh"}>
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
          <Box component="img" src={logoImage} alt="Maangalyam Logo" sx={{ height: 60, mt: { xs: "100px", md: "50px" }, mb: 2 }} />
          <Typography variant="h6" fontWeight="bold">Basic Details</Typography>
          <Typography variant="body2" color="text.secondary" mb={3} textAlign="center">Lorem ipsum dolor sit amet, consectetur</Typography>

          <TextField
            select
            label="Profile"
            fullWidth
            margin="normal"
            size="small"
            value={formData.profile}
            error={!!errors.profile}
            helperText={errors.profile}
            onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
          >
            <MenuItem value="self">My Self</MenuItem>
            <MenuItem value="parent">My Son/Daughter</MenuItem>
          </TextField>

          <TextField
            select
            label="Gender"
            fullWidth
            margin="normal"
            size="small"
            value={formData.gender}
            error={!!errors.gender}
            helperText={errors.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>

          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            placeholder="Raghu"
            size="small"
            value={formData.firstName}
            error={!!errors.firstName}
            helperText={errors.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />

          <TextField
            label="Second Name"
            fullWidth
            margin="normal"
            placeholder="Your name"
            size="small"
            value={formData.secondName}
            error={!!errors.secondName}
            helperText={errors.secondName}
            onChange={(e) => setFormData({ ...formData, secondName: e.target.value })}
          />

          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            placeholder="e.g. 9876543210"
            size="small"
            value={formData.phone}
            error={!!errors.phone}
            helperText={errors.phone}
            onChange={(e) => {
              const digitsOnly = e.target.value.replace(/\D/g, "");
              if (digitsOnly.length <= 10) {
                setFormData({ ...formData, phone: digitsOnly });
              }
            }}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            placeholder="your@email.com"
            size="small"
            value={formData.email}
            error={!!errors.email}
            helperText={errors.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Box display="flex" gap={2} mt={3} width="100%">
            <Button fullWidth variant="outlined" sx={{ borderColor: "#ccc" }}>
              Back
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

      {!isSmallScreen && (
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" position="relative" sx={{ bgcolor: "#f9f9f9", mt: "50px" }}>
          <Box component="img" src={coupleImage} alt="Couple" mr={10} sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
          <Box
            position="absolute"
            bottom={180}
            right={3}
            bgcolor="#005b2e"
            color="#fff"
            height={60}
            width={450}
            px={4}
            py={1}
            borderRadius="4px"
            fontWeight="bold"
            fontSize="20px"
          >
            Lorem Ipsum is simply dummy text.
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BasicDetails;
