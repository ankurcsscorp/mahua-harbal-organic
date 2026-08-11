import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RootedInCommunity = () => {
  return (
    <Box
      component="section"
      id='community-section'
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'auto', md: '800px' }, // Full height for desktop, auto for mobile
        backgroundImage: `url('/images/products/community-hero.jpg')`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))', // Dark gradient overlay
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2, // Ensure content is above the overlay
          textAlign: 'center',
          color: '#F5F5F5', // Off-white text
          paddingY: { xs: '40px', md: '80px' },
        }}
      >
        {/* Accent Line */}
        <Box
          sx={{
            width: '60px',
            height: '2px',
            backgroundColor: '#C29B38', // Golden accent line
            margin: '0 auto 16px',
          }}
        />

        {/* Main Title */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: `'Playfair Display', serif`, // Elegant serif font
            fontSize: { xs: '32px', md: '48px' },
            fontWeight: 700,
            marginBottom: '24px',
          }}
        >
          Rooted in Community
        </Typography>

        {/* Paragraph Body */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: 1.8,
            color: '#D1D1D1', // Muted off-white
            marginBottom: '32px',
          }}
        >
          The Satpura forests are home to Gond, Baiga, and Korku tribal communities who have harvested Mahua for centuries. Our supply chain begins with them — not as labourers, but as partners. We pay above-market rates, provide advance payments before the harvest season, and invest in community infrastructure. Their knowledge of the forest is irreplaceable. Our role is to connect that knowledge to the world.
        </Typography>

        {/* Link / Action Button */}
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Link
            href="#"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '16px',
              fontWeight: 600,
              color: '#C29B38', // Golden/orange hue
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                color: '#D09235', // Slightly lighter on hover
              },
            }}
          >
            Meet the Communities
            <ArrowForwardIcon sx={{ marginLeft: '8px', fontSize: '20px' }} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default RootedInCommunity;