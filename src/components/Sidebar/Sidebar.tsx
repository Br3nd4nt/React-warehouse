import { Drawer, TextField, FormControlLabel, Checkbox, Select, MenuItem, Box} from '@mui/material';
import { SidebarProperties } from './SidebarProperties'

const Sidebar = ({ isOpen } : SidebarProperties) => {


    // const toggleSidebar = () => {
    //     setIsOpen(!isOpen);
    //   };
      
    return (
    <Box>
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
