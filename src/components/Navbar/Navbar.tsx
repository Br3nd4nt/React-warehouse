import { Toolbar, Typography, Button, Box } from '@mui/material';
import {NavbarProperties} from './NavbarPropperies'
import { StyledAppBar } from './style';

const Navbar = ({ toggleSidebar }: NavbarProperties) => {
    return (
    <StyledAppBar>
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
            Склад товаров
        </Typography>
        <Box>
            <Button color="inherit" onClick={toggleSidebar}>Боковая панель</Button>
            <Button color="inherit">Товары</Button>
            <Button color="inherit">Склады</Button>
            <Button color="inherit">О системе</Button>
            <Button color="inherit">Личный кабинет</Button>
        </Box>
        </Toolbar>
    </StyledAppBar>
    );
};

export default Navbar;
