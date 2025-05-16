import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Link,
} from "@mui/material";

const jobData = new Array(6).fill({
  title: "Job Title",
  description:
    "Brief description of the role. Lorem ipsum dummy text of the printing and typesetting industry.",
  qualifications:
    "Qualifications required. Lorem ipsum dummy text of the printing and typesetting industry.",
});

const CareersPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", mt: { xs: 4, md: 6 } }}>
      {/* Top Heading Section */}
      <Box textAlign="center" py={{ xs: 4, md: 6 }} px={2}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Careers
        </Typography>
        <Typography variant="body2" color="text.secondary">
          where we believe in the magic of love and the power of partnership.
        </Typography>
      </Box>

      {/* Job Openings Section */}
      <Box sx={{ bgcolor: "#f7f7f7", py: { xs: 4, md: 6 }, px: { xs: 2, sm: 4, md: 8 } }}>
        {/* Job Intro Text */}
        <Box sx={{ maxWidth: 800, mx:{xs:"auto" , md:'43px'}, mb: 4 }}>
          <Typography
            variant="h6"
            sx={{ color: "#f6b301", fontWeight: 600, mb: 1 }}
          >
            Current Openings
          </Typography>
          <Typography variant="body2">
            Explore our current job openings below. If you don’t see a specific role
            that fits your skills but believe you could contribute to our team, we’d
            still love to hear from you. Send your resume and a cover letter to{" "}
            <Link href="mailto:email@example.com" underline="hover">
              email@example.com
            </Link>
            .
          </Typography>
        </Box>

        {/* Flex layout of cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {jobData.map((job, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "100%", sm: "48%", md: "30%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Brief description of the role:</strong> {job.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Qualifications required:</strong> {job.qualifications}
                </Typography>
              </CardContent>
              <Box px={2} pb={2}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#f6b301",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: "bold",
                    borderRadius: "4px",
                    ":hover": {
                      backgroundColor: "#e5a800",
                    },
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CareersPage;
