import React from 'react';
import { Box, Container, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductGallery = ({
  products,
  showViewAll,
}) => {

  console.log('ProductGallery products:', showViewAll);
  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    navigate('/products');
  };

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

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {showViewAll && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            <Button
              variant="outlined"
              onClick={handleViewAllProducts}
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
        )}

      </Container>
    </Box>
  );
};

export default ProductGallery;