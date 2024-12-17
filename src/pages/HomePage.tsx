import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductList from "../components/List/ProductList";
import { Box } from "@mui/material";
import { colorPalette } from "../style";
import { ProductCardProps } from "../components/Card/ProductCard";
import { testData } from "../testData";
import { FilterInterface } from "./Filter";


const HomePage: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [allProducts] = useState<ProductCardProps[]>(testData);

    const [filter, setFilter] = useState<FilterInterface>({
      name: "",
      category: "",
      number : 0,
    })

    const handleFilterChange = (newFilter: FilterInterface) => {
      setFilter(newFilter);
    }

    const filteredProducts = allProducts.filter((product) => {
        return (filter.name ? product.name.toLowerCase().includes(filter.name.toLowerCase()) : true) && 
        (filter.category ? product.category == filter.category : true) && product.quantity >= filter.number
    })

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const getAllCategories = (items: ProductCardProps[]) => {
        var categories: Set<string> = new Set();
        items.forEach((item : ProductCardProps) => {
            categories.add(item.category)
        })
        return [...categories].sort()
    }


    return (
      <Box display="flex" sx={{ backgroundColor: colorPalette["dark"] }}>
        <Sidebar isOpen={isOpen} allCategories={getAllCategories(allProducts)} filter={filter} onFilterChange={handleFilterChange}/>
        <Box flex={1}>
          <Navbar toggleSidebar={toggleSidebar} />
          <ProductList items={filteredProducts}/>
        </Box>
      </Box>
    );
};

export default HomePage;
