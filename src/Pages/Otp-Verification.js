import React, { useState } from "react";
import { Box, Button, Typography, TextField, useMediaQuery } from "@mui/material";
import otpImage from "../images/login.png"; // Right image
import logoImage from "../images/Mangalyam_text.png"; // Logo
import { useNavigate , useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const location = useLocation()

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
const handleVerify = () => {
  const enteredOTP = otp.join("");
  const fromPath = location.state?.from;

  const targetRoute = (fromPath === '/login') ? '/profile-ready' : '/set-password';

  navigate(targetRoute, { state: { otp: enteredOTP } });
  console.log("Verifying OTP:", enteredOTP);
};

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <Box display="flex" height="100vh" overflow="hidden" flexDirection={{ xs: "column", md: "row" }}>
      {/* Left (Form) Side */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#fff"
        position={isMobile ? "fixed" : "relative"}
        width={isMobile ? "100%" : "auto"}
        height={isMobile ? "100%" : "auto"}
        zIndex={2}
      >
        <Box
          width="100%"
          maxWidth="350px"
          px={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            component="img"
            src={logoImage}
            alt="Maangalyam Logo"
            sx={{ height: 60, mb: 2 }}
          />
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            OTP Verification
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            We’ve sent a code to your mobile number ******9946
          </Typography>

          <Box display="flex" gap={2} justifyContent="center" mb={2}>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                id={`otp-${index}`}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                inputProps={{
                  style: {
                    width: "30px",
                    height: "30px",
                    textAlign: "center",
                    fontSize: "18px",
                  },
                  maxLength: 1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
              />
            ))}
          </Box>

          <Typography variant="caption" color="text.secondary" mb={3}>
            Didn’t get a code?{" "}
            <span style={{ color: "#f6b301", cursor: "pointer" }}>Click to resend</span>
          </Typography>

          <Box display="flex" gap={2} width="100%">
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate(-1)}
              sx={{ borderColor: "#ccc" }}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleVerify}
              sx={{ backgroundColor: "#f6b301", color: "#fff" }}
            >
              Verify
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Right (Image) Side - Hidden on small screens */}
      <Box
        flex={1}
        display={{ xs: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        bgcolor="#f9f9f9"
      >
        <Box
          component="img"
          src={otpImage}
          alt="Couple"
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            
          }}
        />
      </Box>
    </Box>
  );
};

export default OTPVerification;
