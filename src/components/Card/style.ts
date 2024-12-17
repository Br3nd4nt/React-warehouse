import { styled } from "@mui/system";
import { Card, Typography } from "@mui/material";
import { colorPalette } from "../../style";

export const ProductCardWrapper = styled(Card)({
  width: 300,
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  "&:hover": {
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
    transform: "scale3d(1.05, 1.05, 1)",
  },
  backgroundColor: colorPalette["saturated"],
  color: colorPalette["light"],
});

export const ProductCardTitle = styled(Typography)({
  fontWeight: "bolder",
  fontSize: "20px",
  color: colorPalette["light"],
});

export const ProductCardDescription = styled(Typography)({
  fontSize: "16px",
  color: colorPalette["light"],
});

export const ProductCardCategory = styled(Typography)({
  fontSize: "12px",
  color: colorPalette["light"],
});

export const ProductCardQuantity = styled(Typography)({
  fontSize: "12px",
  color: colorPalette["light"],
});

export const ProductCardImageAltText = styled(Typography)({
  height: 140,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: colorPalette["pastel"],
  color: colorPalette["light"],
});
