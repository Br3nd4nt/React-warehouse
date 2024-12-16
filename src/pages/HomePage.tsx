import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductList from "../components/List/ProductList";
import { Box } from "@mui/material";

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box display="flex">
      <Sidebar isOpen={isOpen} />
      <Box flex={1}>
        <Navbar toggleSidebar={toggleSidebar} />
        <ProductList />
      </Box>
    </Box>
  );
};

export default HomePage;
