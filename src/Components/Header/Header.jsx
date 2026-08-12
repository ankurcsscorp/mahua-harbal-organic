import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(() => ({
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  backgroundColor: '#263D2A',
  boxShadow: 'none',
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: '#fff',
  margin: theme?.spacing?.(0, 2) || '16px',
  cursor: 'pointer',
  transition: 'color 0.3s',
  '&:hover': {
    color: theme?.palette?.primary?.main || '#1976d2',
  },
}));

const QuoteButton = styled(Button)(({ theme }) => ({
  border: '1px solid #fff',
  color: '#fff',
  borderRadius: '20px',
  padding: theme?.spacing?.(0.5, 2) || '4px 16px',
  textTransform: 'none',
  transition: 'all 0.3s',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    'Products',
    'Mahua',
    'Sourcing',
    'Communities',
    'Quality',
    'Global Markets',
  ];

  const sectionMap = {
    Products: 'product-gallery',
    Mahua: 'introduction-section',
    Sourcing: 'sourcing-section',
    Communities: 'community-section',
    Quality: 'why-satpura-naturals-section',
    'Global Markets': 'global-regions-section',
  };

  const handleNavigation = (link) => {
    const sectionId = sectionMap[link];

    // If already on Home page, scroll directly
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      return;
    }

    // If on another page, navigate to Home first
    navigate('/', {
      state: {
        scrollTo: sectionId,
      },
    });
  };

  return (
    <StyledAppBar
      position="sticky"
      id="header"
      sx={{
        backgroundColor: '#263D2A',
        boxShadow: 'none',
        zIndex: 1100,
      }}
    >
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            SATPURA NATURALS
          </Typography>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link}
                variant="body1"
                onClick={() => handleNavigation(link)}
              >
                {link}
              </NavLink>
            ))}

            <QuoteButton
              variant="outlined"
              onClick={() => navigate('/quote')}
            >
              Request a Quote
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

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link}
                onClick={() => {
                  handleNavigation(link);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={link} />
              </ListItem>
            ))}

            <ListItem>
              <QuoteButton
                fullWidth
                onClick={() => {
                  navigate('/quote');
                  setDrawerOpen(false);
                }}
              >
                Request a Quote
              </QuoteButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </StyledAppBar>
  );
};

export default Header;
