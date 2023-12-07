import Hero from "./components/Hero";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { CartProvider } from "./store/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <Hero />
      <Menu />
    </CartProvider>
  );
}

export default App;
