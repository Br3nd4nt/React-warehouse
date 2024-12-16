import React, { useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../Card/ProductCard";
import ProductCardModal from "../Card/ProductCardModal";

const testData = [
  {
    name: "Товар 1",
    description: "Описание товара 1",
    category: "Категория A",
    quantity: 10,
    unit: "шт",
    image: "https://i.pinimg.com/736x/60/6b/72/606b728cf4b84803f6d48b6bba5cb686.jpg",
  },
  {
    name: "Товар 2",
    description: "Длинное описание товара 2".repeat(5),
    category: "Категория B",
    quantity: 5,
    unit: "шт",
    image: null,
  },
];

const ProductList: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = (product: any) => {
        setSelectedProduct(product);
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    }


    return (
        <>
        <Grid container spacing={2} justifyContent="flex-start">
        {testData.map((product, index) => (
            <Grid item key={index}>
                <div onClick={() => handleCardClick(product)}>
                    <ProductCard {...product} />
                </div>
            </Grid>
        ))}
        </Grid>

        <ProductCardModal open={isModalOpen} onClose={handleCloseModal} product={selectedProduct}/>
        </>
    );
    };

export default ProductList;
