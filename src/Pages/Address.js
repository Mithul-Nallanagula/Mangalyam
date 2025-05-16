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

const AddressDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const initialForm = {
    country: "India",
    state: "Telangana",
    city: "Hyderabad",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleNext = () => {
    navigate("/caste-religion-details", { state: { ...location.state, ...formData } });
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const countries = ["India", "USA", "Canada", "UK", "Australia"];
  const states = {
    India: ["Telangana", "Maharashtra", "Karnataka", "Tamil Nadu"],
    USA: ["California", "Texas", "New York", "Florida"],
    Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
    UK: ["England", "Scotland", "Wales", "Northern Ireland"],
    Australia: ["New South Wales", "Victoria", "Queensland", "Western Australia"],
  };
  const cities = {
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Karnataka: ["Bangalore", "Mysore", "Hubli-Dharwad", "Mangalore"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    California: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
    Texas: ["Houston", "San Antonio", "Dallas", "Austin"],
    "New York": ["New York City", "Buffalo", "Rochester", "Albany"],
    Florida: ["Miami", "Orlando", "Tampa", "Jacksonville"],
    Ontario: ["Toronto", "Ottawa", "Mississauga", "Brampton"],
    Quebec: ["Montreal", "Quebec City", "Gatineau", "Sherbrooke"],
    "British Columbia": ["Vancouver", "Victoria", "Surrey", "Burnaby"],
    Alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge"],
    England: ["London", "Birmingham", "Manchester", "Liverpool"],
    Scotland: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee"],
    Wales: ["Cardiff", "Swansea", "Newport", "Bangor"],
    "Northern Ireland": ["Belfast", "Derry", "Lisburn", "Newtownabbey"],
    "New South Wales": ["Sydney", "Newcastle", "Wollongong", "Central Coast"],
    Victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo"],
    Queensland: ["Brisbane", "Gold Coast", "Sunshine Coast", "Townsville"],
    "Western Australia": ["Perth", "Fremantle", "Mandurah", "Bunbury"],
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
          <Typography variant="h6" fontWeight="bold" alignSelf="flex-start">Address</Typography>
          <Typography variant="body2" color="text.secondary" mb={3} alignSelf="flex-start">Nullam rhoncus est diam ac congue. Nunc est nulla.</Typography>

          <TextField
            select
            label="Country"
            fullWidth
            margin="normal"
            size="small"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value, state: "", city: "" })}
          >
            {countries.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="State"
            fullWidth
            margin="normal"
            size="small"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value, city: "" })}
            disabled={!formData.country}
          >
            {states[formData.country]?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="City"
            fullWidth
            margin="normal"
            size="small"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            disabled={!formData.state}
          >
            {cities[formData.state]?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <Box display="flex" gap={2} mt={3} width="100%">
            <Button fullWidth variant="outlined" sx={{ borderColor: "#ccc" }} onClick={handleBack}>
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

export default AddressDetails;