import React, { useState } from "react";
import {
  Box,
  Typography,
  Switch,
  Button,
  Stack,


} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import arrowImg from "../images/arrow.png"; // replace with actual path

const features = [
  { text: "20,000+ of PNG & SVG graphics", free: true, premium: true },
  { text: "Access to 100 million stock images", free: true, premium: true },
  { text: "Upload custom icons and fonts", free: false, premium: true },
  { text: "Unlimited Sharing", free: false, premium: true },
  { text: "Upload graphics & video in up to 4k", free: false, premium: true },
  { text: "Unlimited Projects", free: false, premium: true },
];

const Pricingpage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const monthlyPrice = 25;
  const yearlyPrice = monthlyPrice * 12 * 0.75;


  // stacks at md and below

  return (
    <Box sx={{ px: 3, py: 10, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: 25, md: 40 } }}>
        Powerful features for
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{
        color: "#f6b301", fontSize: { xs: 20, md: 30 }, background: "linear-gradient(90deg, #55CBFB, #FFB000)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block"
      }}>
        powerful creators
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 2, mb: 4 }}>
        Choose a plan that's right for you
      </Typography>

      {/* Toggle */}
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
        <Typography variant="body2">Pay Monthly</Typography>
        <Switch
          checked={isYearly}
          onChange={() => setIsYearly(!isYearly)}
          color="warning"
        />
        <Typography variant="body2">Pay Yearly</Typography>
        <Box component="img" src={arrowImg} alt="Save 25%" sx={{ height: 50, ml: 1 }} />
      </Stack>

      {/* Plans */}
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {/* Free Plan */}
        <Box
          sx={{
            width: 320,
            border: "1px solid #eee",
            p: 3,
            borderRadius: 2,
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Free
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: "12px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>

          <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>
            ₹0 <Typography variant="caption">/ Month</Typography>
          </Typography>

          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderColor: "#f6b301",
              color: "#f6b301",
              textTransform: "none",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Get Started Now
          </Button>

          {features.map((f, idx) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              {f.free ? (
                <CheckIcon fontSize="small" sx={{ color: "#f6b301", mr: 1 }} />
              ) : (
                <CloseIcon fontSize="small" sx={{ color: "#999", mr: 1 }} />
              )}
              <Typography
                variant="body2"
                sx={{ color: f.free ? "text.primary" : "text.disabled" }}
              >
                {f.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Premium Plan */}
        <Box
          sx={{
            width: 320,
            bgcolor: "#ffb000",
            p: 3,
            borderRadius: 2,
            color: "white",
            textAlign: "left",
            boxShadow: 3,
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Premium
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontSize: "12px" }}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Typography>

          <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>
            ₹{isYearly ? yearlyPrice : monthlyPrice}{" "}
            <Typography variant="caption">/ {isYearly ? "Year" : "Month"}</Typography>
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "white",
              color: "#f6b301",
              textTransform: "none",
              fontWeight: "bold",
              mb: 3,
              ":hover": { bgcolor: "#fff3d4" },
            }}
          >
            Get Started Now
          </Button>

          {features.map((f, idx) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <CheckIcon fontSize="small" sx={{ color: "white", mr: 1 }} />
              <Typography variant="body2" sx={{ fontWeight: f.premium ? 600 : 400 }}>
                {f.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Pricingpage;
