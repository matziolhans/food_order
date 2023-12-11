import classes from "./Header.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  const totalItems = cartCtx.items.reduce((numberOfItems, item) => {
    return numberOfItems + item.quantity;
  }, 0);

  return (
    <header className={classes.header}>
      <h1>Food Order App</h1>
      <button onClick={handleShowCart}>Cart({totalItems})</button>
    </header>
  );
}

export default Header;
