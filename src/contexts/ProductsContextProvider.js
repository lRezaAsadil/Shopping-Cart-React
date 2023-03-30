import React, { createContext, useState, useEffect } from "react";

// API
import { getProducts } from "../services/api";

// Create Context
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //   Creating a fetchAPI() to add product data
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };

    fetchAPI();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
