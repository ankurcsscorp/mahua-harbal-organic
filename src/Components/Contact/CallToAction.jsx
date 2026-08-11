import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CallToAction = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#263D2A', // Dark forest green background
        color: '#F5F5F5', // Light/off-white text
        textAlign: 'center',
        paddingY: { xs: '40px', md: '80px' }, // Generous vertical padding
        paddingX: { xs: '16px', md: '24px' }, // Horizontal padding for smaller screens
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: `'Playfair Display', serif`, // Elegant serif font
          fontSize: { xs: '28px', md: '36px' },
          fontWeight: 400,
          marginBottom: '16px',
        }}
      >
        Partner With Us
      </Typography>

      {/* Body Text */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '16px', md: '18px' },
          lineHeight: 1.6,
          color: '#D1D1D1', // Light grey text
          maxWidth: '800px',
          marginX: 'auto',
          marginBottom: '32px',
        }}
      >
        We work with importers, distributors, food and beverage companies, and botanical ingredient buyers worldwide. Whether you need a sample, a specification sheet, or a long-term supply agreement — we are ready to talk.
      </Typography>

      {/* Call-to-Action Buttons */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {/* Primary Button */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: '#D09235', // Golden-tan background
            color: '#FFFFFF', // White text
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '16px',
            paddingX: '24px',
            paddingY: '12px',
            '&:hover': {
              backgroundColor: '#B87F2A', // Darker golden-tan on hover
            },
          }}
        >
          Request a Quote
        </Button>

        {/* Secondary Button */}
        <Button
          variant="outlined"
          sx={{
            color: '#FFFFFF', // White text
            borderColor: '#FFFFFF', // Light border
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '16px',
            paddingX: '24px',
            paddingY: '12px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle hover effect
              borderColor: '#FFFFFF',
            },
          }}
        >
          Contact Us
        </Button>
      </Stack>
      <br/>
      <br/>
      <br/>
      <hr/>
    </Box>
  );
};

export default CallToAction;