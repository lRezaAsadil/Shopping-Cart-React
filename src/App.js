import { Routes, Route, Navigate } from "react-router-dom";

// Componenrs
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Navbar from "./components/shared/Navbar";
import Category from "./components/shared/Category";
import Footer from "./components/shared/Footer";


// Contexts
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Store />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
        <Footer/>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
