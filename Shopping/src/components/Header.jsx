import { useContext, useRef } from "react";

import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/shoppingContext.jsx";

export default function Header() {
  const modal = useRef();
  const cartCtx = useContext(CartContext);

  const cartQuantity = cartCtx.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cartCtx.items}
        onUpdateCartItemQuantity={cartCtx.updateItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />

      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}