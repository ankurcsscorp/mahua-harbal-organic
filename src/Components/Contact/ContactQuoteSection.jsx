import React from 'react';
import { Box, Grid, Paper, Typography, TextField, Button, Link } from '@mui/material';

const ContactQuoteSection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `url('/images/workspace-background.jpg')`, // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        paddingTop: { xs: '80px', md: '120px' },
        paddingBottom: { xs: '80px', md: '120px' },
        backgroundColor: '#333333', // Fallback dark gray background
      }}
    >
      {/* Main Container */}
      <Grid container justifyContent="center" spacing={4}>
        {/* Left Panel: Blue Info Card */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#1A5CE5', // Bright blue background
              borderRadius: '16px',
              padding: '32px',
              color: '#FFFFFF', // White text
            }}
          >
            <Typography
              variant="overline"
              sx={{
                fontSize: '12px',
                fontWeight: 300,
                textTransform: 'uppercase',
                marginBottom: '16px',
                display: 'block',
              }}
            >
              Help Us 24/7
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              What Can We Offer for Your Business
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: '24px',
                lineHeight: 1.6,
              }}
            >
              Sample text. Click to select the text box. Click again or double click to start editing the text.
            </Typography>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li>65 Street, Network City, NYPD</li>
              <li>Which don’t Look Even Slightly Believable</li>
              <li>+1 222 545 55 44</li>
            </ul>
            <Typography
              variant="body2"
              sx={{
                marginBottom: '8px',
              }}
            >
              Quick Support Number
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '20px',
              }}
            >
              (+99 6984 5698 56)
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                marginTop: '24px',
                textDecoration: 'underline',
              }}
            >
              <Link href="https://www.freepik.com" target="_blank" color="inherit">
                Image from Freepik
              </Link>
            </Typography>
          </Paper>
        </Grid>

        {/* Right Panel: White Form Card */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#FFFFFF', // White background
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            <Typography
              variant="overline"
              sx={{
                fontSize: '12px',
                fontWeight: 300,
                textTransform: 'uppercase',
                color: '#666666', // Gray text
                textAlign: 'center',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: '32px',
                color: '#333333', // Dark text
              }}
            >
              Request A Quote
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                variant="standard"
                label="Name"
                placeholder="Enter your Name"
                sx={{ marginBottom: '24px' }}
              />
              <TextField
                fullWidth
                variant="standard"
                label="Message"
                placeholder="Enter your message"
                multiline
                rows={4}
                sx={{ marginBottom: '32px' }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#1A5CE5', // Bright blue background
                  color: '#FFFFFF', // White text
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  borderRadius: '50px', // Pill-shaped button
                  paddingY: '12px',
                  '&:hover': {
                    backgroundColor: '#174BB8', // Darker blue on hover
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