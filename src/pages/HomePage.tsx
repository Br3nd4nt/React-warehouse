import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
    return (
        <Box display="flex">
        <Sidebar />
        <Box flex={1}>
          <Navbar />
          <ProductList />
        </Box>
      </Box>
    );
};

export default HomePage;
