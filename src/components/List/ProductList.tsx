import React, { useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../Card/ProductCard";
import ProductCardModal from "../Card/ProductCardModal";
import { StyledPagination } from "./style";
import { ProductListProps } from "./ProductListPropperties";

const ProductList = ({items} : ProductListProps) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const startIndex = (currentPage - 1) * itemsPerPage;

    const handleCardClick = (product: any) => {
        setSelectedProduct(product);
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    }

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <>
        <Grid container spacing={2} justifyContent="space-evenly" alignItems="center" marginTop="10px">
        {(items.slice(startIndex, startIndex + itemsPerPage)).map((product, index) => (
            <Grid item key={index}>
                <div onClick={() => handleCardClick(product)}>
                    <ProductCard {... product} />
                </div>
            </Grid>
        ))}
        </Grid>

        <StyledPagination
            count={Math.ceil(items.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
        />
        <ProductCardModal open={isModalOpen} onClose={handleCloseModal} product={selectedProduct}/>
        </>
    );
    };

export default ProductList;
