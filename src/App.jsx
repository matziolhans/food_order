import Hero from "./components/Hero";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { CartProvider } from "./store/CartContext";
import { UserProgressProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgressProvider>
      <CartProvider>
        <Header />
        <Hero />
        <Menu />
        <Cart />
        <Checkout/>
      </CartProvider>
    </UserProgressProvider>
  );
}

export default App;
