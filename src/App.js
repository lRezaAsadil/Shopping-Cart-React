import { Routes, Route, Navigate } from "react-router-dom";

// Componenrs
import Store from "./components/Store";

// Contexts
import ProductsContextProvider from "./contexts/ProductsContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/products" element={<Store />} />
        <Route path="/*" element={<Navigate to="/products"/>}/>
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
