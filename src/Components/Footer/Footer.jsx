import React from 'react';
import { Box, Container, Grid, Typography, Button, Divider, Link, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const navigationLinks = [
  { label: "About Us", href: "#" },
  { label: "Our Products", href: "#" },
  { label: "Mahua", href: "#" },
  { label: "Sustainable Sourcing", href: "#" },
  { label: "Forest Communities", href: "#" },
];

const productLinks = [
  { label: "Mahua Dried Flowers", href: "#" },
  { label: "Mahua Extract", href: "#" },
  { label: "Mahua Seed Oil", href: "#" },
  { label: "Mahua Concentrate", href: "#" },
  { label: "Custom Formulations", href: "#" },
];

const Footer = () => {
  const navigation = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#263D2A',
        color: '#F5F5F5',
        paddingTop: { xs: '40px', md: '80px' },
        paddingBottom: { xs: '40px', md: '80px' },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4}>
          {/* Column 1: Brand */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: `'Playfair Display', serif`,
                fontSize: '24px',
                fontWeight: 700,
                color: '#F5F5F5',
                lineHeight: 1.3,
              }}
            >
              SATPURA<br />NATURALS
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: '16px',
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#D1D1D1',
              }}
            >
              Premium Mahua botanicals, ethically sourced from the ancient Satpura forests of Madhya Pradesh, India.
            </Typography>
            <Divider
              sx={{
                backgroundColor: '#C58A25',
                height: '2px',
                width: '50px',
                marginY: '16px',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                color: '#C58A25',
                fontFamily: `'Playfair Display', serif`,
              }}
            >
              EST. MADHYA PRADESH
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: '#C58A25',
                borderColor: '#C58A25',
                textTransform: 'none',
                fontSize: '14px',
                padding: '8px 16px',
                marginTop: '16px',
                '&:hover': {
                  backgroundColor: '#C58A25',
                  color: '#263D2A',
                  borderColor: '#C58A25',
                  justifyContent: 'end',
                  
                },
              }}
              onClick={()=>navigation("/contact")}
            >
              Become a Buyer
            </Button>
          </Grid>

          {/* Column 2: Navigate */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#C58A25',
                letterSpacing: '1px',
                marginBottom: '16px',
              }}
            >
              NAVIGATE
            </Typography>
            <Stack spacing={1}>
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  underline="hover"
                  sx={{
                    fontSize: '14px',
                    color: '#D1D1D1',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#F5F5F5' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Products */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#C58A25',
                letterSpacing: '1px',
                marginBottom: '16px',
              }}
            >
              PRODUCTS
            </Typography>
            <Stack spacing={1}>
              {productLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  underline="hover"
                  sx={{
                    fontSize: '14px',
                    color: '#D1D1D1',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#F5F5F5' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#C58A25',
                letterSpacing: '1px',
                marginBottom: '16px',
              }}
            >
              CONTACT
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                color: '#D1D1D1',
                marginBottom: '8px',
              }}
            >
              Satpura Naturals<br />Madhya Pradesh, India
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                color: '#D1D1D1',
                marginBottom: '8px',
              }}
            >
              exports@satpuranaturals.in
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                color: '#D1D1D1',
                marginBottom: '16px',
              }}
            >
              satpuranaturals.in
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider
          sx={{
            backgroundColor: '#D1D1D1',
            marginY: '40px',
          }}
        />
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              color: '#D1D1D1',
            }}
          >
            © 2026 Satpura Naturals. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2} style={{marginLeft: "5%"}}>
            {["FSSAI Certified", "Organic Certified", "ISO 22000"].map((badge, index) => (
              <Box
                key={index}
                sx={{
                  border: '1px solid #C58A25',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  fontSize: '12px',
                  color: '#C58A25',
                  textAlign: 'center',
                }}
              >
                {badge}
              </Box>
            ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;