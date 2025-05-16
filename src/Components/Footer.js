import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link
} from "@mui/material";
import MangalyamLogo from '../images/Mangalyam_text.png';

const Footer = () => {
  const navItems = [
    { label: "About", route: "/about" },
    { label: "Features", route: "/" },
    { label: "Contact Us", route: "/" },
    { label: "Career", route: "/careers" },
  ];
  const navigate = useNavigate();
 
  return (
    <Box sx={{ bgcolor: "#f9f9f9"   , p: 4, mt: 6 }}>
      <Box
        sx={{
          display: "flex",
          alignItems:'center',
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          rowGap: 4
        }}
      >
        {/* Logo and Description */}
        <Box sx={{ flex: "1 1 20%", ml:'5%', minWidth: 200 }}>
          <Box sx={{ mb: 1 }}>
            <img
              src={MangalyamLogo}
              alt="Maangalayam Logo"
              style={{ height: 32 }}
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 1, color: "gray", maxWidth: 200 }}>
            Clarity gives you the blocks and components you need to create a truly professional website.
          </Typography>
        </Box>

        {/* Company Links */}
        <Box sx={{ flex: "1 1 20%", minWidth: 150 }}>
          <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: "block" }}>
            COMPANY
          </Typography>
          {navItems.map(({ label, route }) => (
        <Box
          key={label}
          onClick={() => navigate(route)}
          sx={{
            cursor: "pointer",
            mb: 0.5,
            color: "text.secondary",
            "&:hover": { color: "primary.main" },
          }}
        >
          {label}
        </Box>
      ))}
        </Box>

        {/* Help Links */}
        <Box sx={{ flex: "1 1 20%", minWidth: 150 }}>
          <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: "block" }}>
            HELP
          </Typography>
          {[
            { text: "Customer Support", color: "text.secondary" },
            { text: "Delivery Details", color: "text.secondary" },
            { text: "Terms & Conditions", color: "text.secondary" },
            { text: "Privacy Policy", color: "text.secondary" }
          ].map((item) => (
            <Link
              key={item.text}
              href="#"
              underline="none"
              variant="body2"
              color={item.color}
              sx={{ display: "block", mb: 0.5 }}
            >
              {item.text}
            </Link>
          ))}
        </Box>

        {/* Newsletter */}
        <Box sx={{ flex: "1 1 30%", minWidth: 250 }}>
          <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: "block" }}>
            NEWSLETTER
          </Typography>
          <Box display="flex" gap={1} mt={1} maxWidth={300}>
            <TextField
              size="small"
              placeholder="Enter your email address"
              fullWidth
              sx={{
                bgcolor: "#fff",
                input: { fontSize: 14, px: 1.5 }
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#f5a623",
                color: "#fff",
                fontSize:'10px',
                px: 2,
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#e89b1c" }
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt={6} borderTop="1px solid #ddd" pt={2} textAlign="center">
        <Typography variant="caption" color="text.secondary">
          © Copyright 2025. All Rights Reserved by ClarityUI.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
