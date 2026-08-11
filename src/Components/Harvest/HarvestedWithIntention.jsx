import { Box, Grid, Typography, Link, Stack, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HarvestedWithIntention = () => {
  return (
    <Box
      component="section"
      id='sourcing-section'
      sx={{
        backgroundColor: '#F9F8F3',
        paddingY: { xs: '40px', md: '80px' },
        paddingX: { xs: '16px', md: '24px' },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column: Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/products/harvesting-plant.jpg"
              alt="Harvesting plant"
              sx={{
                width: '100%',
                height: { xs: 'auto', md: '100%' },
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>

          <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{
                  padding: { xs: '16px', md: '24px' },
                  textAlign: 'center',
                  maxWidth: '800px', // Fixed maximum width for the column
                  margin: '0 auto', // Center the column horizontally
                }}
              >
                <Stack spacing={3}>
                {/* Number */}
                <Typography
                variant="h3"
                sx={{
                  fontFamily: `'Playfair Display', serif`,
                  fontSize: { xs: '28px', md: '36px' },
                  fontWeight: 700,
                  color: '#333333',
                }}
              >
                Harvested with Intention
              </Typography>
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
                    Post-harvest, flowers are sun-dried on raised platforms to prevent contamination, then sorted by hand before primary processing. The result is a clean, traceable raw material that meets the standards of the most demanding international buyers.

                </Typography>
                <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: '#333333',
                }}
              >
                We harvest Mahua flowers during the brief spring season — March to May — when blossoms fall naturally from the tree. No cutting, no chemicals, no mechanical intervention. The forest sets the pace.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: '#333333',
                }}
              >
                Post-harvest, flowers are sun-dried on raised platforms to prevent contamination, then sorted by hand before primary processing. The result is a clean, traceable raw material that meets the standards of the most demanding international buyers.
              </Typography>
              <Box>
                <Link
                  href="#"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#C29B38',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#D09235',
                    },
                  }}
                >
                  Learn About Our Sourcing
                  <ArrowForwardIcon sx={{ marginLeft: '8px', fontSize: '20px' }} />
                </Link>
              </Box>
            </Stack>
                </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HarvestedWithIntention;