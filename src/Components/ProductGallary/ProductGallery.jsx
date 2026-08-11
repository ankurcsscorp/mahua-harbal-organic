import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Mahua Dried Flowers",
    image: "/images/products/mahua-dried-flowers.jpeg",
    description: "Premium naturally dried Mahua flowers sourced from the Satpura forests.",
  },
  {
    id: 2,
    name: "Mahua Extract",
    image: "/images/products/mahua-extract.jpeg",
    description: "Premium Mahua botanical extract.",
  },
  {
    id: 3,
    name: "Mahua Seed Oil",
    image: "/images/products/mahua-seed-oil.png",
    description: "Cold-processed Mahua seed oil.",
  },
];

const ProductGallery = () => {
  return (
    <Box
    id="product-gallery"
      component="section"
      sx={{
        backgroundColor: '#243A2A',
        paddingTop: { xs: '80px', md: '100px' },
        paddingBottom: { xs: '80px', md: '100px' },
        paddingX: { xs: '16px', md: '10%' },
      }}
    >
      <Container maxWidth="lg">
        {/* Product Grid */}
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* View All Products Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: '#F5F2E9',
              borderColor: '#B88A45',
              padding: '14px 30px',
              fontSize: '16px',
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#B88A45',
                color: '#243A2A',
                borderColor: '#B88A45',
              },
            }}
          >
            View All Products →
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductGallery;