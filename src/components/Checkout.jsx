import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./Modal";
import classes from "./Checkout.module.css";

function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const price = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const shouldRenderModal = userProgressCtx.userProgress === "checkout";

  if (!shouldRenderModal) {
    return null;
  }

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal
      open={userProgressCtx.userProgress === "checkout"}
      onClose={handleClose}
    >
      <form action="">
        <div className={classes.checkout}>
          <h2>Checkout</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="" required />

          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="" required />

          <label htmlFor="postal-code">Postal Code</label>
          <input type="text" id="postal-code" name="" required />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="" required />

          <label htmlFor="e-mail">E-Mail</label>
          <input type="text" id="e-mail" name="" required />

          <p>Total Amount: {price}€</p>

          <div className={classes.navigation}>
            <button onClick={handleClose} type="button">Close</button>
            <button>Order</button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default Checkout;
