import { Button, Drawer } from '@mui/material'
import {Box, styled} from '@mui/system'

export const StyledDrawer = styled(Drawer)({
    transition: 'width 0.3s',
    top: '64px',
    overflow: 'hidden',
    
})

export const SearchButton = styled(Button)({
    width: "90%",
    justifyContent: 'center',
    align: "center",
})

export const ClearButton = styled(Button)({
    width: "90%",
    justifyContent: 'center',
    align: "center",
})

export const ButtonBox = styled(Box)({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    padding: 2, 

})

export const InputWithButton = styled(Box)({
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    padding: 2, 
})