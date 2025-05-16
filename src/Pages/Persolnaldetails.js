// ...other imports remain unchanged
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import coupleImage from "../images/Personal.png";

const PersonalDetails = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const initialForm = {
    profile: "rffdf",
    gender: "cxv",
    firstName: "John",
    secondName: "Doe",
    phone: "9876543210",
    maritalStatus: "",
    heightFeet: "",
    heightInches: "",
    familyType: "",
    familyStatus: "",
    hasDisability: "",
    disabilityDetails: "",
    hasKids: "",
    numberOfKids: "",
    kidsAges: [],
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.profile) newErrors.profile = "Profile is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.firstName?.trim()) newErrors.firstName = "First name is required";
    if (!formData.secondName?.trim()) newErrors.secondName = "Second name is required";
    if (!formData.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status is required";
    if (!formData.heightFeet) newErrors.heightFeet = "Height (feet) is required";
    if (!formData.heightInches) newErrors.heightInches = "Height (inches) is required";
    if (!formData.familyType) newErrors.familyType = "Family type is required";
    if (!formData.familyStatus) newErrors.familyStatus = "Family status is required";

    if ((formData.maritalStatus === "Divorced" || formData.maritalStatus === "Widowed") && formData.hasKids === "Yes") {
      if (!formData.numberOfKids || isNaN(formData.numberOfKids)) {
        newErrors.numberOfKids = "Please enter number of children";
      } else {
        formData.kidsAges.forEach((age, idx) => {
          if (!age || isNaN(age)) {
            newErrors[`kidAge_${idx}`] = `Age for child ${idx + 1} is required`;
          }
        });
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigate("/professional-details", { state: formData });
    }
  };

  const handlePrevious = () => {
    navigate(-1);
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
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Box width="100%" maxWidth="400px" display="flex" flexDirection="column" alignItems="center" mt={{ xs: 0, md: 10 }}>
          <Box component="img" src={logoImage} alt="Maangalyam Logo" sx={{ height: 50, mt: { xs: "150px", md: "130px" }, mb: 2 }} />
          <Typography variant="h6" fontWeight="bold" alignSelf="flex-start">Personal Details</Typography>
          <Typography variant="body2" color="text.secondary" mb={3} alignSelf="flex-start">
            Let’s Personalize Your Matrimony Brand
          </Typography>

          {/* Marital Status */}
          <Typography fontWeight={500} alignSelf="flex-start" mb={1}>Marital Status</Typography>
          <Box display="flex" gap={1} mb={2} width="100%">
            {["Divorced", "Un-Married", "Widowed"].map((status) => (
              <Button
                key={status}
                variant={formData.maritalStatus === status ? "contained" : "outlined"}
                onClick={() => {
                  setFormData({ ...formData, maritalStatus: status, hasKids: "", numberOfKids: "", kidsAges: [] });
                }}
                sx={{ textTransform: 'none', borderRadius: "30px", flex: 1 }}
              >
                {status}
              </Button>
            ))}
          </Box>

          {/* If Divorced or Widowed: Has Kids? */}
          {(formData.maritalStatus === "Divorced" || formData.maritalStatus === "Widowed") && (
            <>
              <Typography fontWeight={500} alignSelf="flex-start" mt={1} mb={1}>Do you have kids?</Typography>
              <Box display="flex" gap={1} mb={2} width="100%">
                {["Yes", "No"].map((option) => (
                  <Button
                    key={option}
                    variant={formData.hasKids === option ? "contained" : "outlined"}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        hasKids: option,
                        numberOfKids: "",
                        kidsAges: option === "Yes" ? [] : [],
                      });
                    }}
                    sx={{ textTransform: 'none', flex: 1, borderRadius: "30px" }}
                  >
                    {option}
                  </Button>
                ))}
              </Box>

              {/* Number of Kids and their Ages */}
              {formData.hasKids === "Yes" && (
                <>
                  <TextField
  label="Number of Children"
  fullWidth
  margin="normal"
  type="number"
  size="small"
  value={formData.numberOfKids}
  error={!!errors.numberOfKids}
  helperText={errors.numberOfKids}
  InputProps={{ inputProps: { min: 1, max: 9 } }}
  onChange={(e) => {
    const val = e.target.value;
    // Only allow empty string or single digit from 1 to 9
    if (val === "" || (/^[1-9]$/.test(val))) {
      setFormData({
        ...formData,
        numberOfKids: val,
        kidsAges: val ? Array(parseInt(val)).fill("") : [],
      });
    }
  }}
/>

                  {formData.kidsAges.map((age, index) => (
                    <TextField
                      key={index}
                      label={`Age of Child ${index + 1}`}
                      fullWidth
                      type="number"
                      InputProps={{ inputProps: { min: 0, max: 20 } }}
                      margin="dense"
                      size="small"
                      value={age}
                      error={!!errors[`kidAge_${index}`]}
                      helperText={errors[`kidAge_${index}`]}
                      onChange={(e) => {
                        const updatedAges = [...formData.kidsAges];
                        updatedAges[index] = e.target.value;
                        setFormData({ ...formData, kidsAges: updatedAges });
                      }}
                    />
                  ))}
                </>
              )}
            </>
          )}

          {/* Height: Feet + Inches */}
          <Typography fontWeight={500} alignSelf="flex-start" mt={2} mb={1}>Height</Typography>
          <Box display="flex" gap={2} width="100%">
            <TextField
              select
              label="Feet"
              size="small"
              fullWidth
              value={formData.heightFeet}
              error={!!errors.heightFeet}
              helperText={errors.heightFeet}
              onChange={(e) => setFormData({ ...formData, heightFeet: e.target.value })}
            >
              {["4", "5", "6", "7"].map((feet) => (
                <MenuItem key={feet} value={feet}>{feet}'</MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Inches"
              size="small"
              fullWidth
              value={formData.heightInches}
              error={!!errors.heightInches}
              helperText={errors.heightInches}
              onChange={(e) => setFormData({ ...formData, heightInches: e.target.value })}
            >
              {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"].map((inch) => (
                <MenuItem key={inch} value={inch}>{inch}"</MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Family Type */}
          <TextField
            select
            label="Family Type"
            fullWidth
            margin="normal"
            size="small"
            value={formData.familyType}
            onChange={(e) => setFormData({ ...formData, familyType: e.target.value })}
          >
            {["Athiest", "Nuclear", "Joint"].map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </TextField>

          {/* Family Status */}
          <Typography fontWeight={500} alignSelf="flex-start" mt={2} mb={1}>Family Status</Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mb={2} width="100%">
            {["Lower", "Lower-Middle", "Upper-Middle", "Upper"].map((status) => (
              <Button
                key={status}
                variant={formData.familyStatus === status ? "contained" : "outlined"}
                onClick={() => setFormData({ ...formData, familyStatus: status })}
                sx={{
                  fontSize: "10px",
                  textTransform: 'none',
                  borderRadius: "30px",
                  flexBasis: { xs: "48%", sm: "auto" },
                  flexGrow: 1,
                }}
              >
                {status}
              </Button>
            ))}
          </Box>

          {/* Disabilities */}
          <Typography fontWeight={500} alignSelf="flex-start" mt={2} mb={1}>Any Disabilities</Typography>
          <Box display="flex" gap={1} mb={1} width="100%">
            {["No", "Yes"].map((option) => (
              <Button
                key={option}
                variant={formData.hasDisability === option ? "contained" : "outlined"}
                onClick={() => setFormData({ ...formData, hasDisability: option })}
                sx={{ textTransform: 'none', flex: 1, borderRadius: "30px" }}
              >
                {option}
              </Button>
            ))}
          </Box>
          {formData.hasDisability === "Yes" && (
            <TextField
              fullWidth
              size="small"
              placeholder="If yes, mention here"
              margin="normal"
              value={formData.disabilityDetails}
              onChange={(e) => setFormData({ ...formData, disabilityDetails: e.target.value })}
            />
          )}

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

      {/* Right Side Image */}
      {!isSmallScreen && (
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" position="relative" sx={{ bgcolor: "#f9f9f9", mt: "50px" }}>
          <Box component="img" src={coupleImage} alt="Couple" mr={10} sx={{ width: "70%", objectFit: "cover" }} />
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
            Lorem Ipsum is simply dummy text.
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PersonalDetails;
