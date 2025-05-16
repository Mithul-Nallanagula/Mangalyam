import React from "react";
import { Box, Typography } from "@mui/material";

// Import different images for each section
import img1 from "../images/sampleimg.png";
import img2 from "../images/sampleimg.png";
import img3 from "../images/sampleimg.png";
import img4 from "../images/sampleimg.png";

// Section data
const aboutSections = [
  {
    title: "Our Story",
    description:
      "At [Website Name], we understand that the journey to finding a life partner is a deeply personal and significant one. Founded by a team of passionate individuals who have experienced the joys and challenges of relationships firsthand, our platform is designed to provide a safe, supportive, and empowering space for individuals seeking meaningful connections.",
    imgFirst: false,
    image: img1,
  },
  {
    title: "What We Stand For",
    description:
      "We are committed to fostering authentic connections rooted in mutual respect, shared values, and genuine compatibility. Our mission is to facilitate the creation of lasting, fulfilling relationships that enrich the lives of our members and contribute to the building of strong, loving families and communities.",
    imgFirst: true,
    image: img2,
  },
  {
    title: "Our Approach",
    description:
      "Unlike traditional marriage websites, we prioritize quality over quantity. Through a combination of advanced matching algorithms and personalized support from our team of relationship experts, we strive to ensure that every match made on our platform has the potential to blossom into something truly special.",
    imgFirst: false,
    image: img3,
  },
  {
    title: "Why Choose Us",
    description: [
      "Comprehensive Profiles: Our detailed profiles allow you to showcase your personality, values, and preferences, making it easier to find compatible matches.",
      "Privacy and Security: We take the privacy and security of our members seriously, employing strict measures to safeguard your personal information.",
      "Supportive Community: Join a community of like-minded individuals who are committed to finding love and supporting each other along the way.",
      "Continuous Improvement: We are constantly refining and updating our platform to provide you with the best possible experience, incorporating feedback from our members to ensure that we remain at the forefront of online matchmaking.",
    ],
    imgFirst: true,
    image: img4,
  },
];

const AboutPage = () => {
  return (
    <Box sx={{ mt: 6 }}>
      {/* Header */}
      <Box textAlign="center" py={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          About us
        </Typography>
        <Typography variant="body2" color="text.secondary">
          where we believe in the magic of love and the fragrance of true hearts.
        </Typography>
      </Box>

      {/* Sections */}
      <Box sx={{ px: { xs: 2, sm: 6, md: 10 }, pb: 8 }}>
        {aboutSections.map((section, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column-reverse",
                md: section.imgFirst ? "row-reverse" : "row",
              },
              alignItems: "center",
              mb: 6,
              gap: 4,
            }}
          >
            {/* Text */}
            <Box flex={1}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ color: "#f6b301", mb: 1 }}
              >
                {section.title}
              </Typography>

              {Array.isArray(section.description) ? (
                <Box component="ul" sx={{ pl: 3, m: 0 }}>
                  {section.description.map((point, idx) => (
                    <Typography
                      key={idx}
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {point}
                    </Typography>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {section.description}
                </Typography>
              )}
            </Box>

            {/* Image */}
            <Box
              component="img"
              src={section.image}
              alt={section.title}
              sx={{
                width: {
                  xs: "100%", // Mobile: full width
                  sm:
                    index === 0
                      ? 600
                      : index === 1
                        ? 650
                        : index === 2
                          ? 650
                          : 500,
                },
                height: {
                  xs: 200, // Mobile: fixed height for all
                  sm:
                    index === 0
                      ? 400
                      : index === 1
                        ? 300
                        : index === 2
                          ? 300
                          : 500,
                },
                borderRadius: 1,
                objectFit: "cover",
                maxWidth: "100%",
              }}
            />


          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutPage;
