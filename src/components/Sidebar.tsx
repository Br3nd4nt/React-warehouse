import React, { useState } from 'react';
import { Drawer, TextField, FormControlLabel, Checkbox, Select, MenuItem, Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
      
    return (
    <Box>
              {/* Кнопка управления */}
      <IconButton
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          left: isOpen ? 255 : 0,
          top: 69,
          zIndex: 1300,
          transition: 'width 0.3s',
          backgroundColor: 'white',
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Box style={{ padding: '20px', display: isOpen ? 'block' : 'none' }}>
            <Drawer variant="persistent" anchor="left" open={isOpen}
            PaperProps={{
                sx: {
                  width: isOpen ? '250px' : '0px',
                  transition: 'width 0.3s',
                  top: '64px',
                  overflow: 'hidden',
                },
              }}
              style={{
                width: isOpen ? 250 : 0,
              }}>
                <Box style={{ padding: '20px' }}>
                <TextField label="Фильтр" variant="outlined" fullWidth style={{ marginBottom: '15px' }} />
                <FormControlLabel control={<Checkbox />} label="Показывать только с количеством > 0" />
                <Select defaultValue="" fullWidth>
                    <MenuItem value="">Выберите категорию</MenuItem>
                    <MenuItem value="A">Категория A</MenuItem>
                    <MenuItem value="B">Категория B</MenuItem>
                </Select>
                </Box>
            </Drawer>
        </Box>
    </Box>
    );
};

export default Sidebar;
