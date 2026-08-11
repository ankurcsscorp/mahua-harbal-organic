import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Introduction = () => {
  return (
    <Box
      component="section"
      id='introduction-section'
      sx={{
        backgroundColor: '#F5F2E9',
        paddingTop: { xs: '70px', md: '120px' },
        paddingBottom: { xs: '70px', md: '120px' },
      }}
    >
      <Container maxWidth="lg">
        {/* Introduction Label */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: { xs: '60px', md: '100px' },
          }}
        >
          <Box
            sx={{
              width: '70px',
              height: '2px',
              backgroundColor: '#B88A45',
              marginRight: '16px',
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: '14px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#B88A45',
              fontWeight: 500,
            }}
          >
            Introduction
          </Typography>
        </Box>

        {/* Content */}
        <Grid container spacing={10}>
          {/* Left Column: Heading */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: `'Playfair Display', serif`,
                fontSize: { xs: '40px', md: '56px' },
                lineHeight: 1.15,
                color: '#18352A',
                fontWeight: 400,
                maxWidth: '700px',
              }}
            >
              Est. in the Forests of Madhya Pradesh
            </Typography>
          </Grid>

          {/* Right Column: Paragraphs */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: `'Inter', sans-serif`,
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: 1.7,
                color: '#4B4B47',
                marginBottom: '40px',
                maxWidth: '700px',
              }}
            >
              Satpura Naturals is a forest-to-world botanical company rooted in the ancient Satpura landscape of central India. We source, process, and export premium-grade Mahua products — flowers, extracts, and seed oils — directly from the forest communities who have tended these trees for generations.
            </Typography>
          </Grid>
        </Grid>

        {/* Two Panels */}
        <Grid container spacing={4} sx={{ marginTop: '60px' }}>
          {/* Left Panel */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: '#EDEAE3',
              padding: '40px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: `'Playfair Display', serif`,
                fontSize: '24px',
                fontWeight: 600,
                color: '#18352A',
                marginBottom: '16px',
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: `'Inter', sans-serif`,
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#4B4B47',
              }}
            >
              To create a sustainable supply chain that connects forest communities to global markets, fair pricing, traceability, and ecological balance.
            </Typography>
          </Grid>

          {/* Right Panel */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: '#EDEAE3',
              padding: '40px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: `'Playfair Display', serif`,
                fontSize: '24px',
                fontWeight: 600,
                color: '#18352A',
                marginBottom: '16px',
              }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: `'Inter', sans-serif`,
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#4B4B47',
              }}
            >
              To empower tribal communities and preserve the biodiversity of the Satpura forests while delivering premium botanical products to the world.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introduction;