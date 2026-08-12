import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const ContactQuoteSection = () => {
  const location = useLocation();

  const pathUrl = location.pathname;
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `url('/images/products/hero.jpg')`, // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        paddingTop: { xs: "80px", md: "120px" },
        paddingBottom: { xs: "80px", md: "120px" },
        backgroundColor: "#333333", // Fallback dark gray background
        paddingLeft: { xs: "20px", md: "5%" },
        paddingRight: { xs: "20px", md: "5 %" },
      }}
    >
      {/* Main Container */}
      <Grid container justifyContent="center" spacing={4}>
        {/* Left Panel: Blue Info Card */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            maxWidth: {
              xs: "100%",
              md: "650px",
            },
            mt: {
              xs: 2,
              md: 2,
            },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#263D2A", // Bright blue background
              borderRadius: "16px",
              padding: "100px",
              color: "#FFFFFF", // White text
            }}
          >
            <Typography
              variant="overline"
              sx={{
                fontSize: "12px",
                fontWeight: 300,
                textTransform: "uppercase",
                marginBottom: `${pathUrl === "/contact" ? "60px" : "0px"}`,
                display: "block",
              }}
            >
              Help Us 24/7
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              What Can We Offer for Your Business
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "24px",
                lineHeight: 1.6,
              }}
            >
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </Typography>
            <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
              <li>Bhopal Madhya pradesh, kolar road</li>
              <li>Which don’t Look Even Slightly Believable</li>
            </ul>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "8px",
              }}
            >
              Quick Support Number
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              (+91 6984 5698 56)
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                marginTop: "24px",
                textDecoration: "underline",
              }}
            >
              <Link
                href="https://www.instagram.com"
                target="_blank"
                color="inherit"
              >
                Instagram
              </Link>
            </Typography>
          </Paper>
        </Grid>

        {/* Right Panel: White Form Card */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            maxWidth: {
              xs: "100%",
              md: "650px",
            },
            mt: {
              xs: 2,
              md: 2,
            },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#FFFFFF", // White background
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                fontSize: "12px",
                fontWeight: 300,
                textTransform: "uppercase",
                color: "#666666", // Gray text
                textAlign: "center",
                display: "block",
                marginBottom: "16px",
              }}
            >
              {pathUrl === "/contact" ? "Contact Us" : "Get an Estimate"}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                textAlign: "center",
                marginBottom: "32px",
                color: "#333333", // Dark text
              }}
            >
              {pathUrl === "/contact" ? "Get in Touch" : "Request a Quote"}
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                variant="standard"
                label="Name"
                placeholder="Enter your Name"
                sx={{ marginBottom: "24px" }}
              />
              <TextField
                fullWidth
                variant="standard"
                label="Email"
                placeholder="Enter your Email"
                sx={{ marginBottom: "24px" }}
              />
              {pathUrl === "/contact" && (
                <TextField
                  fullWidth
                  variant="standard"
                  label="Mobile Number"
                  placeholder="Enter your Mobile Number"
                  sx={{ marginBottom: "24px" }}
                />
              )}
              <TextField
                fullWidth
                variant="standard"
                label="Message"
                placeholder="Enter your message"
                multiline
                rows={4}
                sx={{ marginBottom: "32px" }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#263D2A", // Bright blue background
                  color: "#FFFFFF", // White text
                  fontWeight: 700,
                  textTransform: "uppercase",
                  borderRadius: "50px", // Pill-shaped button
                  paddingY: "12px",
                  "&:hover": {
                    backgroundColor: "#387543", // Darker blue on hover
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactQuoteSection;
