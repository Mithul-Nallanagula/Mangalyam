import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import facebook from "../images/facebook.png";
import twitter from "../images/Twitter.png";
import instagram from "../images/Instagram.png";
import youtube from "../images/Youtube.png";

const Help = () => {
  const [expanded, setExpanded] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formValues.name.trim()) errors.name = "Name is required";
    if (!formValues.email.includes("@")) errors.email = "Valid email is required";
    if (!formValues.subject) errors.subject = "Please select a subject";
    if (!formValues.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formValues);
      // Reset form or send data to server
    }
  };

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", px: 2, py: 10 }}>
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold">
            Have a Question or Feedback?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #55CBFB, #FFB000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            We’re Here to Help!
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Helping You Every Step of the Way
          </Typography>
        </Box>

        {/* Accordion */}
        <Box>
          {[
            {
              label: "Customer Support",
              content:
                "For general inquiries or assistance, please email us at support@maangalyam.com",
            },
            {
              label: "Technical Support",
              content:
                "If you're experiencing technical issues, contact our technical support team at techsupport@maangalyam.com",
            },
            {
              label: "Business Inquiries",
              content:
                "For partnership opportunities or business-related inquiries, reach out to us at partnerships@maangalyam.com",
            },
          ].map((item, idx) => (
            <Accordion
              key={idx}
              disableGutters
              square
              elevation={0}
              expanded={expanded === idx}
              onChange={handleAccordionChange(idx)}
              sx={{ border: "none", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === idx ? <RemoveIcon /> : <AddIcon />
                }
              >
                <Typography variant="body2">{item.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Feedback Form */}
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Feedback Form
          </Typography>
          <Typography variant="caption" color="text.secondary">
            If you prefer, you can also use the form below to send us your
            feedback or queries.
          </Typography>

          <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
              }}
            >
              <TextField
                name="name"
                label="Name"
                fullWidth
                value={formValues.name}
                onChange={handleInputChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
                placeholder="Your Name"
                size="small"
              />
              <TextField
                name="email"
                label="Email"
                fullWidth
                value={formValues.email}
                onChange={handleInputChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                placeholder="Your Email"
                size="small"
              />
            </Box>

            <TextField
              name="subject"
              label="Subject"
              select
              fullWidth
              value={formValues.subject}
              onChange={handleInputChange}
              error={!!formErrors.subject}
              helperText={formErrors.subject}
              sx={{ mb: 2 }}
              size="small"
            >
              <MenuItem value="">Select subject</MenuItem>
              <MenuItem value="Feedback">Feedback</MenuItem>
              <MenuItem value="Support">Support</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
            </TextField>

            <TextField
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              value={formValues.message}
              onChange={handleInputChange}
              error={!!formErrors.message}
              helperText={formErrors.message}
              placeholder="Enter your message"
              sx={{ mb: 2 }}
              size="small"
            />

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#FFB000",
                  width: { xs: "100%", sm: "auto" },
                  textTransform: "none",
                  px: 4,
                  ":hover": {
                    backgroundColor: "#e09e00",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Business Hours */}
        <Box
          sx={{
            backgroundColor: "#003F2B",
            color: "white",
            p: 2,
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" fontWeight="bold" fontSize={16}>
            Business Hours
          </Typography>
          <Typography variant="caption" fontSize={14} color="white" mb={1}>
            Our support team is available to assist you during the following
            hours:
          </Typography>
          <ul style={{ marginTop: 4, paddingLeft: 16 }}>
            <li>
              <Typography variant="caption">
                Monday to Friday: 9.00 AM to 6.00 PM IST
              </Typography>
            </li>
            <li>
              <Typography variant="caption">Saturday and Sunday: Closed</Typography>
            </li>
          </ul>
        </Box>

        {/* Footer Social Icons */}
        <Box sx={{ textAlign: "center", mt: 4, fontSize: 12 }}>
          <Typography variant="caption">
            Connect with us on social media for updates, tips, and more
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
            {[facebook, instagram, youtube, twitter].map((icon, idx) => (
              <Box
                key={idx}
                component="img"
                src={icon}
                alt={`social-${idx}`}
                sx={{ width: 24, height: 24 }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Help;
