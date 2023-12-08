import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import classes from "./Cart.module.css";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const price = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const shouldRenderModal = userProgressCtx.userProgress === "cart";

  if (!shouldRenderModal) {
    return null;
  }

  function handleClose() {
    userProgressCtx.hideCart();
  }
 
  return (
    <Modal
      open={userProgressCtx.userProgress === "cart"}
      className={classes.modal}
    >
      <h2>Cart</h2>
      <div className={classes.order}>
        <ul>
          {cartCtx.items.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>
                {item.name} - {item.price}€
              </p>
              <div className={classes.quantitySelection}>
                <button onClick={() => cartCtx.addItem(item)}>+</button>
                <p>{item.quantity} </p>
                <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.footer}>
        <div className={classes.navigation}>
          <button onClick={handleClose}>Close</button>
          {cartCtx.items.length > 0 && <button>Checkout</button>}
        </div>
        <p>Price: {price}€</p>
      </div>
    </Modal>
  );
}

export default Cart;
