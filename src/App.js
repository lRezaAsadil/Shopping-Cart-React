// Componenrs
import Store from "./components/Store";

// Contexts
import ProductsContextProvider from "./contexts/ProductsContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <Store />
    </ProductsContextProvider>
  );
}

export default App;
