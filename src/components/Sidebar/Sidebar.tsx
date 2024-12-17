import { Drawer, TextField, FormControlLabel, Checkbox, Select, MenuItem, Box, SelectChangeEvent, Button, IconButton} from '@mui/material';
import { SidebarProps } from './SidebarProperties'
import { useState } from 'react';
import { ButtonBox, ClearButton, InputWithButton, SearchButton } from './style';
import { FilterInterface } from '../../pages/Filter';
import Delete from '@mui/icons-material/Delete';
import { colorPalette } from '../../style';

const Sidebar : React.FC<SidebarProps> = ({ isOpen, filter, onFilterChange, allCategories} : SidebarProps) => {

    const [localFilter, setLocalFilter] = useState(filter);

    const [localName, setLocalName] = useState("")
    const [isChecked, setIsChecked] = useState(false);
    const [localCategory, setLocalCategory] = useState("")
    


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFilter = { ...localFilter, name: e.target.value };
      setLocalName(e.target.value)
      setLocalFilter(newFilter)
    }
    
    const handleCategoryChange = (e: SelectChangeEvent<string>) => {
        const newFilter = { ...localFilter, category: e.target.value };
        setLocalCategory(e.target.value)
        setLocalFilter(newFilter)
    }
    
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFilter = { ...localFilter, number: !isChecked ? 1 : 0 };
      setIsChecked(!isChecked)
      setLocalFilter(newFilter)
      
    }
    
    const handleSearchClick = () => {
      onFilterChange(localFilter)
    }

    const handleClearClick = () => {
      setLocalCategory("")
      setLocalName("")
      setIsChecked(false)
      const clearFilter: FilterInterface = {
        name: "",
        category: "",
        number : 0,
      }
      setLocalFilter(clearFilter)
      onFilterChange(clearFilter)
    }

    return (
    <Box>
            <Drawer anchor="left" open={isOpen}
            PaperProps={{
              sx: {
                top:"60px",
                width:"30%"
              }}}>

                <Box style={{ padding: '20px' }}>
                <InputWithButton color={colorPalette["saturated"]}>
                  <TextField label="Название товара" variant="outlined" fullWidth style={{ marginBottom: '15px'}} onChange={handleNameChange} value={localName}/>
                  <IconButton
                    color="inherit"
                    aria-label="Удалить название товара"
                    size="large"
                    sx={{
                      height: "56px",
                      width: "56px",
                    }}
                    onClick={() => {
                      setLocalName("")
                      setLocalFilter({ ...localFilter, name: ""});
                    }}
                  >
                    <Delete/>
                  </IconButton>
                </InputWithButton>
                
                <FormControlLabel control={<Checkbox onChange={handleQuantityChange} checked={isChecked} />} label="Показывать только с количеством > 0"/>
                <InputWithButton color={colorPalette["saturated"]}>
                <Select value={localCategory} fullWidth displayEmpty onChange={handleCategoryChange}>
                    <MenuItem value="">Выберите категорию</MenuItem>
                    {allCategories.map((category, _index) => (
                        <MenuItem value={category}>{category}</MenuItem>
                    ))}
                </Select>
                <IconButton
                    color="inherit"
                    aria-label="Удалить категорию"
                    size="large"
                    sx={{
                      height: "56px",
                      width: "56px",
                    }}
                    onClick={() => {
                      setLocalCategory("")
                      setLocalFilter({ ...localFilter, category: ""})
                    }}
                  >
                    <Delete/>
                  </IconButton>
                </InputWithButton>
                </Box>
                <ButtonBox>
                  <SearchButton variant="contained" onClick={handleSearchClick}>Искать</SearchButton>
                  <ClearButton variant="outlined" onClick={handleClearClick}>Сбросить все параметры</ClearButton>
                </ButtonBox>
            </Drawer>
    </Box>
    );
};

export default Sidebar;
