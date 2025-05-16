import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  LinearProgress,
  Card,
  CardMedia,
  useMediaQuery,
  useTheme
} from "@mui/material";
import couple1 from "../images/couple1.png";
import couple2 from "../images/couple2.png";
import img6 from "../images/Frame 48096488.png";
import img7 from "../images/Frame 48096490.png";
import img8 from "../images/Frame 48096491.png";
import img9 from "../images/Frame 48096493.png";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const testimonials = [
  {
    img: couple1,
    text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    name: "Raghu & Shwetha",
    stars: 5
  },
  {
    img: couple2,
    text: "Landingfolio’s simplicity and elegant templates helped us build trust with our audience.",
    name: "Ankit & Priya",
    stars: 4
  },
  {
    img: img6,
    text: "Amazing experience. Super helpful platform to find genuine matches.",
    name: "Kiran & Meera",
    stars: 5
  },
  {
    img: img7,
    text: "We found each other through the tailored preferences. Loved the ease!",
    name: "Ravi & Sneha",
    stars: 4
  },
  {
    img: img8,
    text: "Absolutely fantastic experience. Couldn't ask for more!",
    name: "Vikram & Neha",
    stars: 5
  },
  {
    img: img9,
    text: "A reliable place to find meaningful connections.",
    name: "Raj & Anu",
    stars: 3
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = isMobile
        ? container.offsetWidth
        : container.offsetWidth; // scroll full width (2 cards)
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const updateScrollProgress = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const totalScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      const scrolledPercentage = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrolledPercentage);
    }
  };

  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  return (
    <Box sx={{ textAlign: "center", py: 6, px: 2, bgcolor: "#f9f9f9" }}>
      <Typography variant="caption" sx={{ color: "#f5a623" }}>
        394+ HAPPY MAANGALAAYM USERS
      </Typography>
      <Typography variant="h4" fontWeight="bold" mt={1}>
        Don’t just take our words
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Box
          ref={scrollRef}
          onScroll={updateScrollProgress}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: 3,
            width: "90%",
            px: 1,
            pb: 2,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none'
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              sx={{
                flex: "0 0 auto",
                minWidth: {
                  xs: "100%",
                  sm: "calc(50% - 12px)"
                },
                maxWidth: {
                  xs: "100%",
                  sm: "calc(50% - 12px)"
                },
                borderRadius: 3,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                p: 2,
                textAlign: "left"
              }}
            >
              <CardMedia
                component="img"
                image={testimonial.img}
                alt={testimonial.name}
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  mr: 2,
                  objectFit: "cover"
                }}
              />
              <Box>
                <Typography color="#f5a623" fontSize="14px">
                  {renderStars(testimonial.stars)}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {testimonial.text}
                </Typography>
                <Typography variant="subtitle2" mt={1} fontWeight="bold">
                  {testimonial.name}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      <Box mt={3} display="flex" justifyContent="center" alignItems="center" gap={2}>
        <IconButton onClick={() => scroll("left")}>
          <ArrowBackIos fontSize="small" />
        </IconButton>

        <Box sx={{ width: 200 }}>
          <LinearProgress
            variant="determinate"
            value={scrollProgress}
            sx={{
              height: 6,
              borderRadius: 5,
              backgroundColor: "#eee",
              "& .MuiLinearProgress-bar": { backgroundColor: "#f5a623" }
            }}
          />
        </Box>

        <IconButton onClick={() => scroll("right")}>
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonials;
