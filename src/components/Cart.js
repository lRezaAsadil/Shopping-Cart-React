import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContextProvider";
import loading from "../assets/icons/loading.svg";
import ShopCart from "./shared/ShopCart";

import Styles from "./Cart.module.css";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={Styles.container}>
      <div className={Styles.cartContainer}>
        {state.selecedItems.map((item) => (
          <ShopCart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={Styles.payments}>
          <p>
            <span>Total Items : </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total payments : </span>
            {state.total} $
          </p>
          <div className={Styles.buttonContainer}>
            <button
              className={Styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}>
              Check Out
            </button>
            <button
              className={Styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}>
              Clear
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={Styles.complete}>
          <img src={loading} alt="tt" style={{ width: "100%" }} />
          <h3> Checked Out Successfull </h3>
          <Link to="/products"> By More</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={Styles.complete}>
          <img src={loading} alt="tt" style={{ width: "100%" }} />
          <h3> Back to Shop </h3>
          <Link to="/products"> Shop</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
