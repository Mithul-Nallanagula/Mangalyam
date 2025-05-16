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

const CasteReligionDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const initialForm = {
    caste: location.state?.caste || "",
    subCaste: location.state?.subCaste || "",
    religion: location.state?.religion || "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleNext = () => {
    navigate("/personal-details", { state: { ...location.state, ...formData } });
  };

  const handleBack = () => {
    navigate(-1);
  };

  // Sample data - replace with your actual lists
  const castes = ["Brahmin", "Kshatriya", "Vaishya", "Shudra", "Other"];
  const subCastes = {
    Brahmin: ["Iyengar", "Iyer", "Saraswat", "Smartha"],
    Kshatriya: ["Rajput", "Maratha", "Nair", "Reddy"],
    Vaishya: ["Agarwal", "Gupta", "Kamma", "Chettiar"],
    Shudra: ["Naidu", "Vanniyar", "Yadav", "Devanga"],
    Other: ["Inter-caste", "Not Specified"],
  };
  const religions = ["Hindu", "Muslim", "Christian", "Sikh", "Other"];

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
          <Box component="img" src={logoImage} alt="Maangalyam Logo" sx={{ height: 60, mt: { xs: "10px", md: "0px" }, mb: 2 }} />
          <Typography variant="h6" fontWeight="bold" alignSelf="flex-start">Caste & Religion Details</Typography>
          <Typography variant="body2" color="text.secondary" mb={3} alignSelf="flex-start">Let's Personalize Your Matrimony Brand</Typography>

          <TextField
            select
            label="Caste"
            fullWidth
            margin="normal"
            size="small"
            value={formData.caste}
            onChange={(e) => setFormData({ ...formData, caste: e.target.value, subCaste: "" })}
          >
            {castes.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Sub-Caste"
            fullWidth
            margin="normal"
            size="small"
            value={formData.subCaste}
            onChange={(e) => setFormData({ ...formData, subCaste: e.target.value })}
            disabled={!formData.caste}
          >
            {subCastes[formData.caste]?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Religion"
            fullWidth
            margin="normal"
            size="small"
            value={formData.religion}
            onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
          >
            {religions.map((option) => (
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
            Lorem Ipsum is simply dummy text .
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CasteReligionDetails;




