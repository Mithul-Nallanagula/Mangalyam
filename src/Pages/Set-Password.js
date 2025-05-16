import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logoImage from "../images/Mangalyam_text.png"; // Make sure this path is correct

const SetPassword = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (value) => {
    if (!value.trim()) {
      return "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      return "Invalid email address";
    }
    return "";
  };

  const checks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const isPasswordValid = Object.values(checks).every(Boolean);

  const handleSetPassword = () => {
    const emailErr = validateEmail(email);
    setEmailError(emailErr);

    if (!emailErr && isPasswordValid) {
      navigate("/profile-ready");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#fff"
    >
      <Box
        width="100%"
        maxWidth={400}
        px={3}
        py={4}
        marginTop={isSmallScreen ? 0 : 5}
        borderRadius={2}
        textAlign="left"
      >
        <Box textAlign="center" mb={2}>
          <Box component="img" src={logoImage} alt="Maangalyam" height={50} />
        </Box>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Set Your Password
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          Create Your Secure Password
        </Typography>

        <Typography fontWeight="bold" color="text.primary" mb={1}>
          Welcome to <span style={{ color: "#f6b301" }}>MAANGALYAM!</span>
        </Typography>
        <Typography variant="body2" mb={1}>
          To ensure the security of your account, please create a strong and
          memorable password.
        </Typography>
        <Typography variant="body2" mb={3}>
          Your journey to finding love begins with a secure foundation.
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="dense"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) {
              setEmailError(validateEmail(e.target.value));
            }
          }}
          onBlur={() => setEmailError(validateEmail(email))}
          size="small"
          error={!!emailError}
          helperText={emailError}
        />

        <TextField
          label="Password"
          fullWidth
          margin="dense"
          size="small"
          type={showPassword ? "text" : "password"}
          placeholder="Enter here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box mt={2}>
          {[
            {
              label: "Min 8 characters",
              valid: checks.length,
            },
            {
              label: "1 Upper case Letter",
              valid: checks.upper,
            },
            {
              label: "1 Number",
              valid: checks.number,
            },
            {
              label: "1 Special character",
              valid: checks.special,
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              display="flex"
              alignItems="center"
              color={item.valid ? "green" : "black"}
              fontSize="14px"
              mb={0.5}
            >
              {item.valid ? (
                <CheckCircleIcon fontSize="small" />
              ) : (
                <CircleOutlinedIcon fontSize="small" />
              )}
              <Box ml={1}>{item.label}</Box>
            </Box>
          ))}
        </Box>

        <Box mt={3} textAlign="center">
          <Button
            onClick={handleSetPassword}
            variant="contained"
            sx={{
              backgroundColor: "#f6b301",
              color: "#fff",
              px: 4,
              py: 1,
              borderRadius: "6px",
              textTransform: "none",
            }}
            disabled={!isPasswordValid}
          >
            Set Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SetPassword;
