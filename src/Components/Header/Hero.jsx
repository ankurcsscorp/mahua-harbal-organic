import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const HERO_BACKGROUND_IMAGE = '/images/forest-hero.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
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
    backgroundColor: 'rgba(0, 51, 25, 0.6)',
    zIndex: 1,
  },
  animation: 'heroAnimation 20s infinite alternate',
  '@keyframes heroAnimation': {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(1.1)' },
  },
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: '#fff',
}));

const EyebrowText = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: '4px',
  color: '#FFA726',
  fontWeight: 500,
}));

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontFamily: 'Playfair Display, serif',
  fontSize: '4rem',
  lineHeight: 1.1,
  margin: theme.spacing(2, 0),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  padding: theme.spacing(1, 3),
  textTransform: 'none',
  fontWeight: 'bold',
  margin: theme.spacing(1),
}));

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <EyebrowText variant="subtitle2">MADHYA PRADESH, INDIA</EyebrowText>
        <HeroHeading variant="h1">From the Forests of India to the World.</HeroHeading>
        <HeroSubtitle>
          Premium Mahua botanicals, ethically sourced from the ancient Satpura forests of Madhya Pradesh.
        </HeroSubtitle>
        <Box sx={{ mt: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center' }}>
          <CTAButton variant="contained" color="warning">
            Explore Our Products →
          </CTAButton>
          <CTAButton variant="outlined" color="inherit">
            Become a Buyer
          </CTAButton>
        </Box>
        <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
          Trusted by importers across Europe, North America & Asia
        </Typography>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;