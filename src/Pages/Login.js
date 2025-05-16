import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import loginImage from "../images/Mangalyam_text.png";
import loginimg from "../images/login.png";

const LoginPage = () => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (tab === 0) {
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid 10-digit number";
      }
    } else {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!formData.email.includes("@")) {
        newErrors.email = "Invalid email format";
      }
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      navigate("/otp-verification" , { state: { from: '/login' } });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection={isSmallScreen ? "column" : "row"}
      height={isSmallScreen ? "100dvh" : "100vh"}
      overflow={isSmallScreen ? "hidden" : "auto"}
    >
      {/* Left Section */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#fff"
        padding={2}
        sx={{
          minHeight: isSmallScreen ? "100dvh" : "auto",
          overflowY: "auto",
        }}
      >
        <Container maxWidth="xs">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={loginImage}
              alt="Maangalyam Logo"
              sx={{ height: 60, marginBottom: 2 }}
            />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Login
            </Typography>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur
            </Typography>

            <Tabs
              value={tab}
              onChange={(e, newValue) => setTab(newValue)}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              sx={{ width: "100%", marginBottom: 2 }}
            >
              <Tab sx={{ fontSize: "10px" }} label="Phone Number" />
              <Tab label="Email" />
            </Tabs>

            {tab === 0 ? (
              <TextField
                fullWidth
                label="Phone number"
                placeholder="+91 - 74659123"
                variant="outlined"
                margin="normal"
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
            ) : (
              <TextField
                fullWidth
                label="Email"
                placeholder="Enter your email"
                variant="outlined"
                margin="normal"
                size="small"
                value={formData.email}
                error={!!errors.email}
                helperText={errors.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            )}

            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Enter here"
              variant="outlined"
              margin="normal"
              size="small"
              value={formData.password}
              error={!!errors.password}
              helperText={errors.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <Box display="flex" justifyContent="flex-start" width="100%" mb={2}>
              <Typography
                sx={{ cursor: "pointer" }}
                variant="body2"
                color="primary"
                onClick={() => navigate("/reset-password")}
              >
                Forgot Password
              </Typography>
            </Box>

            <Button
              variant="contained"
              onClick={handleLogin}
              fullWidth
              sx={{ backgroundColor: "#f6b301", color: "#fff" }}
            >
              Login
            </Button>

            <Typography variant="body2" mt={2}>
              Don’t Have an Account yet?{" "}
              <span
                onClick={() => navigate("/create-account")}
                style={{ cursor: "pointer", color: "#f6b301" }}
              >
                Create
              </span>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Right Section */}
      {!isSmallScreen && (
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#f9f9f9"
        >
          <Box
            component="img"
            src={loginimg}
            alt="Couple"
            sx={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default LoginPage;

