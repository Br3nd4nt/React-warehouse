import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const testData = [
  { name: 'Товар 1', description: 'Описание товара 1', category: 'Категория A', quantity: 10, unit: 'шт', image: null },
  { name: 'Товар 2', description: 'Длинное описание товара 2'.repeat(5), category: 'Категория B', quantity: 5, unit: 'шт', image: null },
]

const ProductList: React.FC = () => {
    return (
        <Grid container spacing={2} justifyContent="flex-start">
        {testData.map((product, index) => (
            <Grid item key={index}>
            <ProductCard {...product} />
            </Grid>
        ))}
        </Grid>
    );
    };

export default ProductList;