import { Routes, Route, Navigate } from "react-router-dom";

// Componenrs
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import Category from "./components/shared/Category";

// Contexts
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
