import classes from "./Header.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";

function Header() {
  const context = useContext(CartContext);

  const totalItems = context.items.reduce((numberOfItems, item) => {
    return numberOfItems + item.quantity;
  }, 0);

  return (
    <header className={classes.header}>
      <h1>Food Order App</h1>
      <button>Cart({totalItems})</button>
    </header>
  );
}

export default Header;
