import React from 'react';
import { Box, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        '&:hover img': {
          transform: 'scale(1.05)',
        },
      }}
    >
      {/* Product Image */}
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
        }}
      />

      {/* Product Name */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: `'Playfair Display', serif`,
          fontSize: '24px',
          color: '#F5F2E9',
          marginTop: '16px',
        }}
      >
        {product.name}
      </Typography>

      {/* Product Description */}
      <Typography
        variant="body2"
        sx={{
          fontFamily: `'Inter', sans-serif`,
          fontSize: '14px',
          color: '#D1D1D1',
          marginTop: '8px',
        }}
      >
        {product.description}
      </Typography>
    </Box>
  );
};

export default ProductCard;