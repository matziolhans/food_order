import Hero from "./components/Hero";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { CartProvider } from "./store/CartContext";
import { UserProgressProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";

function App() {
  return (
    <UserProgressProvider>
      <CartProvider>
        <Header />
        <Hero />
        <Menu />
        <Cart />
      </CartProvider>
    </UserProgressProvider>
  );
}

export default App;
