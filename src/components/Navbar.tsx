import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar: React.FC = () => {
    return (
    <AppBar position="fixed" style={{ backgroundColor: '#333', display: 'flex', position: "absolute", zIndex: 1201}}>
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
            Склад товаров
        </Typography>
        <Box>
            <Button color="inherit">Товары</Button>
            <Button color="inherit">Склады</Button>
            <Button color="inherit">О системе</Button>
            <Button color="inherit">Личный кабинет</Button>
        </Box>
        </Toolbar>
    </AppBar>
    );
};

export default Navbar;
