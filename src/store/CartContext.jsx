import { createContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //check if the article has already been added
    const indexOfItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (indexOfItem > -1) {
      const increaseItemNumber = {
        ...state.items[indexOfItem],
        quantity: state.items[indexOfItem].quantity + 1,
      };
      updatedItems[indexOfItem] = increaseItemNumber;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const indexOfItem = state.items.findIndex((item) => item.id === action.id);

    const item = state.items[indexOfItem];

    const updatedItems = [...state.items];

    if (item.quantity === 1) {
      updatedItems.splice(indexOfItem, 1);
    }
    if (item.quantity > 1) {
      const updatedItem = {
        ...item,
        quantity: item.quantity - 1,
      };
      updatedItems[indexOfItem] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
}

export function CartProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  }

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
