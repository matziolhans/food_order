import { useRef } from "react";
import Hero from "./pages/Hero";
import Header from "./components/Header";
import Menu from "./pages/Menu";
import { CartProvider } from "./store/CartContext";
import { UserProgressProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const menuRef = useRef(null);

  const scrollToMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <UserProgressProvider>
      <CartProvider>
        <Header />
        <Hero scrollToMenu={scrollToMenu} />
        <Menu ref={menuRef} />
        <Cart />
        <Checkout/>
      </CartProvider>
    </UserProgressProvider>
  );
}

export default App;
