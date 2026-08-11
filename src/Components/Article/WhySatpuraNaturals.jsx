import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const principles = [
    {
      id: 1,
      title: "Traceability",
      description:
        "Single-origin, GPS-mapped forest zones. Every batch is traceable to a named harvest location and community.",
    },
    {
      id: 2,
      title: "Sustainability",
      description:
        "Regenerative harvesting protocols, zero deforestation, and seasonal collection that protects the forest ecosystem.",
    },
    {
      id: 3,
      title: "Quality",
      description:
        "Lab-tested, export-grade, and internationally certified. Consistent specifications for global buyers.",
    },
    {
      id: 4,
      title: "Community",
      description:
        "Direct partnerships with 500+ forest families. Fair pricing, advance payments, and long-term relationships.",
    },
  ];

const WhySatpuraNaturals = () => {
  return (
    <Box
      component="section"
      id='why-satpura-naturals-section'
      sx={{
        backgroundColor: '#F7F5EE',
        paddingTop: { xs: '60px', md: '100px' },
        paddingBottom: { xs: '60px', md: '100px' },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          component="header"
          sx={{
            textAlign: 'center',
            marginBottom: { xs: '40px', md: '80px' },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: '14px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#C88A2A',
              fontWeight: 500,
              marginBottom: '16px',
            }}
          >
            Our Principles
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: `'Playfair Display', serif`,
              fontSize: { xs: '32px', md: '48px' },
              color: '#111111',
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            Why Satpura Naturals
          </Typography>
        </Box>

        {/* Principles Grid */}
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
              left: '50%',
              width: '1px',
              backgroundColor: '#DED8C8',
              display: { xs: 'none', md: 'block' },
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '1px',
              backgroundColor: '#DED8C8',
              display: { xs: 'none', md: 'block' },
            },
          }}
        >
          {principles.map((principle, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={principle.id}
              sx={{
                padding: { xs: '20px', md: '40px' },
                textAlign: 'center',
                maxWidth: '600px',
              }}
            >
              {/* Number */}
              <Typography
                variant="h3"
                sx={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#C88A2A',
                  fontFamily: `'Playfair Display', serif`,
                  marginBottom: '16px',
                }}
              >
                {`0${principle.id}`}
              </Typography>

              {/* Title */}
              <Typography
                variant="h5"
                sx={{
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#111111',
                  fontFamily: `'Playfair Display', serif`,
                  marginBottom: '16px',
                }}
              >
                {principle.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#77746F',
                  lineHeight: 1.6,
                }}
              >
                {principle.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhySatpuraNaturals;