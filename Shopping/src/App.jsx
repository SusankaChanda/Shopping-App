import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CartContextProvider from "./store/shoppingContext.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
