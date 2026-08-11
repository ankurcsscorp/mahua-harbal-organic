import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';

const theme = {
    spacing: (factor) => `${factor * 8}px`, // Spacing function
    palette: {
      primary: {
        main: '#1976d2', // Primary color
      },
    },
  };
  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'sticky',
    top: 0,
    zIndex: 1100,
    backgroundColor: '#263D2A', // Dark forest green background
    boxShadow: 'none', // Remove default shadow for a clean look
  }));

const NavLink = styled(Typography)(({ theme }) => ({
    color: '#fff',
    margin: theme?.spacing?.(0, 2) || '16px', // Fallback to '16px'
    cursor: 'pointer',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme?.palette?.primary?.main || '#1976d2', // Fallback to default color
    },
  }));

  const QuoteButton = styled(Button)(({ theme }) => ({
    border: '1px solid #fff',
    color: '#fff',
    borderRadius: '20px',
    padding: theme?.spacing?.(0.5, 2) || '4px 16px', // Fallback to '4px 16px'
    textTransform: 'none',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  }));

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = ['Products', 'Mahua', 'Sourcing', 'Communities', 'Quality', 'Global Markets'];

  const handleScrollToProducts = (p) => {
    const productGallery = document.getElementById('product-gallery'); // Target the id
    const introductionSection = document.getElementById('introduction-section'); // Target the id
    const sourcingSection = document.getElementById('sourcing-section'); // Target the id
    const communitiesSection = document.getElementById('community-section'); // Target the id
    const qualitySection = document.getElementById('why-satpura-naturals-section'); // Target the id
    const globalMarketsSection = document.getElementById('global-regions-section'); // Target the id
    const headerSection = document.getElementById('header'); // Target the id

    switch (p) {
      case 'Products':
        productGallery.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Mahua':
        introductionSection.scrollIntoView({ behavior: 'smooth' });
        break;
        case 'Sourcing':
          sourcingSection.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'Communities':
          communitiesSection.scrollIntoView({ behavior: 'smooth' });
          break;
          case 'Quality':
            qualitySection.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'Global Markets':
            globalMarketsSection.scrollIntoView({ behavior: 'smooth' });
            break;
      default:
        headerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar
    position="sticky"
    id='header'
    top={0}
    sx={{
      backgroundColor: '#263D2A', // Dark forest green background
      boxShadow: 'none', // Remove default shadow for a clean look
      zIndex: 1100, // Ensure it stays above other content
    }}
    >
      <Container>
        <Toolbar >
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff', fontWeight: 'bold' }}>
            SATPURA NATURALS
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <NavLink key={link} variant="body1" onClick={()=>handleScrollToProducts(link)}>
                {link}
              </NavLink>
            ))}
            <QuoteButton variant="outlined">
            <NavLink to="/contact" onClick={() => navigate('/contact')}>Request a Quote</NavLink>
            </QuoteButton>
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link}>
                <ListItemText primary={link} />
              </ListItem>
            ))}
            <ListItem>
              <QuoteButton fullWidth>
              <Link to="/contact">Request a Quote</Link>
                </QuoteButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </StyledAppBar>
  );
};

export default Header;