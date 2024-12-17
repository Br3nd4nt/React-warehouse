import { AppBar } from "@mui/material";
import { styled } from "@mui/system";
import { colorPalette } from "../../style";

export const StyledAppBar = styled(AppBar)({
  // backgroundColor: '#3d414d',
  backgroundColor: colorPalette["saturated"],
  display: "flex",
  position: "fixed",
  zIndex: 1201,
});
