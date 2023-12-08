import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const price = cartCtx.items.reduce((totalPrice, item) => {
    totalPrice + item.quantity * item.price;
  }, 0);

  return (
    <Modal open={userProgressCtx.userProgress === "cart"}>
      <h2>Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>{price}€</p>
      <button>Close</button>
      <button>Checkout</button>
    </Modal>
  );
}

export default Cart;
