import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

const regions = [
  {
    id: 1,
    title: "Europe",
    description:
      "Food & beverage, cosmetics, and botanical ingredient buyers across Germany, France, UK, and the Netherlands.",
  },
  {
    id: 2,
    title: "North America",
    description:
      "Natural product formulators, wellness brands, and specialty food importers in the US and Canada.",
  },
  {
    id: 3,
    title: "Middle East",
    description:
      "Premium food ingredient medicine suppliers across the GCC.",
  },
  {
    id: 4,
    title: "Asia Pacific",
    description:
      "Functional food companies, cosmetic manufacturers, and botanical traders in Japan, South Korea, and Southeast Asia.",
  },
];

const GlobalRegions = () => {
  return (
    <Box
      component="section"
      id='global-regions-section'
      sx={{
        backgroundColor: '#EFECE6', // Light warm beige background
        paddingY: { xs: '40px', md: '80px' }, // Vertical padding
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: '#F9F8F3', // Soft off-white background for the inner container
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for the container
            padding: { xs: '24px', md: '40px' },
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              borderTop: '1px solid #E0DED8', // Top border for the container
              '& > .MuiGrid-item:not(:last-child)': {
                borderRight: { md: '1px solid #E0DED8' }, // Vertical dividers between columns on desktop
              },
            }}
          >
            {regions.map((region) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={region.id}
                sx={{
                  padding: { xs: '16px', md: '24px' },
                  textAlign: 'center',
                  maxWidth: '250px', // Fixed maximum width for the column
                  margin: '0 auto', // Center the column horizontally
                }}
              >
                {/* Number */}
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: `'Playfair Display', serif`, // Elegant serif font
                    fontSize: '48px',
                    fontWeight: 700,
                    color: '#C29B38', // Golden-bronze color
                    marginBottom: '16px',
                  }}
                >
                  {`0${region.id}`}
                </Typography>

                {/* Region Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: `'Playfair Display', serif`,
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#333333', // Dark serif heading
                    marginBottom: '16px',
                  }}
                >
                  {region.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: '#666666', // Muted gray/charcoal
                    wordWrap: 'break-word', // Ensures long words break if necessary
                    overflowWrap: 'break-word', // Ensures text wraps within the container
                  }}
                >
                  {region.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default GlobalRegions;