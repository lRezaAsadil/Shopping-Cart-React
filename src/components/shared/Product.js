import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { isInCart, itemCount, shorten } from "../../helper/functions";
import { CartContext } from "../../contexts/CartContextProvider";
import trash from "../../assets/icons/trash.svg";
import Styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { id, title, price, category, image, rating } = productData;
  const { rate } = rating;
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={Styles.container}>
      <img
        className={Styles.cardImage}
        src={image}
        alt={title}
        style={{ width: "250px" }}
      />
      <h3>{shorten(title)}</h3>
      <p>{price} $</p>
      <p>Category : {category} </p>
      <Rating name="half-rating" defaultValue={rate} precision={0.5} readOnly />
      <div className={Styles.linkContainer}>
        <Link to={`/products/${category}/${id}`}>Details</Link>
        <div className={Styles.buttonContainer}>
          {itemCount(state, id) > 1 && (
            <button
              className={Styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }>
              -
            </button>
          )}
          {itemCount(state, id) === 1 && (
            <button
              className={Styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }>
              <img src={trash} alt="icon" style={{ width: "20px" }} />
            </button>
          )}
          {itemCount(state, id) > 0 && <span className={Styles.counter}> {itemCount(state, id)}</span>}
          {isInCart(state, id) ? (
            <button
              className={Styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }>
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }>
              Add ro Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
