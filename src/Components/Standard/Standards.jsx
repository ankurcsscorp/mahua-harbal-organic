import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Standards = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#141414', // Very dark gray background
        color: '#F5F5F5', // Off-white text
        paddingY: { xs: '60px', md: '100px' }, // Generous vertical padding
        paddingX: { xs: '16px', md: '24px' }, // Horizontal padding for smaller screens
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ marginBottom: '40px' }}>
          <Typography
            variant="overline"
            sx={{
              color: '#C29B38', // Golden-bronze color
              fontSize: '14px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Standards
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: `'Playfair Display', serif`, // Elegant serif font
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 400,
              color: '#F5F5F5', // Off-white
              marginTop: '8px',
            }}
          >
            Uncompromising Standards
          </Typography>
        </Box>

        {/* 3-Column Grid */}
        <Grid
          container
          spacing={4}
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '33.33%',
              width: '1px',
              backgroundColor: '#2A2A2A', // Subtle vertical divider
              display: { xs: 'none', md: 'block' },
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '66.66%',
              width: '1px',
              backgroundColor: '#2A2A2A', // Subtle vertical divider
              display: { xs: 'none', md: 'block' },
            },
          }}
        >
          {/* Column 1: Harvesting */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: `'Playfair Display', serif`,
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#C29B38', // Golden-bronze
                  marginBottom: '16px',
                }}
              >
                01
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: `'Playfair Display', serif`,
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#F5F5F5', // Off-white
                  marginBottom: '16px',
                }}
              >
                Harvesting
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: '#D1D1D1', // Muted light gray
                }}
              >
                Seasonal, hand-harvested from GPS-mapped forest zones..
              </Typography>
            </Box>
          </Grid>

          {/* Column 2: Processing */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: `'Playfair Display', serif`,
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#C29B38', // Golden-bronze
                  marginBottom: '16px',
                }}
              >
                02
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: `'Playfair Display', serif`,
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#F5F5F5', // Off-white
                  marginBottom: '16px',
                }}
              >
                Processing
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: '#D1D1D1', // Muted light gray
                }}
              >
                Primary processing in FSSAI-certified facilities..
              </Typography>
            </Box>
          </Grid>

          {/* Column 3: Export */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: `'Playfair Display', serif`,
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#C29B38', // Golden-bronze
                  marginBottom: '16px',
                }}
              >
                03
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: `'Playfair Display', serif`,
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#F5F5F5', // Off-white
                  marginBottom: '16px',
                }}
              >
                Export
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: '#D1D1D1', // Muted light gray
                }}
              >
                Packed to international specifications. 
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Standards;