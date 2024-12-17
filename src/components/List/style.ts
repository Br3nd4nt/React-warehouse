import { styled } from "@mui/system";
import { colorPalette } from "../../style";
import { Pagination } from "@mui/material";

export const StyledPagination = styled(Pagination)({
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  "& .MuiPaginationItem-root": {
    backgroundColor: colorPalette["dark"],
    color: colorPalette["light"],
    "&:hover": {
      backgroundColor: colorPalette["pastel"],
    },
    "&.Mui-selected": {
      backgroundColor: colorPalette["saturated"],
      color: "#fff",
    },
  },
  "& .MuiPaginationItem-ellipsis": {
    color: colorPalette["saturated"],
  },
});
