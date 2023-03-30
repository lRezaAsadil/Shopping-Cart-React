import { Rating } from "@mui/material";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContextProvider";
import { isInCart, itemCount } from "../helper/functions";
import { CartContext } from "../contexts/CartContextProvider";
import trash from "../assets/icons/trash.svg";
import Styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id - 1;
  const data = useContext(ProductsContext);
  const product = data[id];
  const { title, price, category, description, image, rating } = product;
  const { rate } = rating;
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  return (
    <div className={Styles.container}>
      <img className={Styles.image} src={image} alt={title} />
      <div className={Styles.textContainer}>
        <h3>{title}</h3>
        <p className={Styles.description}>{description}</p>
        <p className={Styles.category}>Category : {category}</p>
        <Rating
          name="half-rating"
          defaultValue={rate}
          precision={0.5}
          readOnly
        />

        <div className={Styles.buttonContainer}>
          <span className={Styles.price}> {price} $ </span>

          <div className={Styles.buttonContainer}>
            {itemCount(state, product.id) > 1 && (
              <button
              className={Styles.smallButton}

                onClick={() =>
                  dispatch({ type: "DECREASE", payload: product })
                }>
                -
              </button>
            )}
            {itemCount(state, product.id) === 1 && (
              <button
              className={Styles.smallButton}

                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: product })
                }>
                <img src={trash} alt="icon" style={{ width: "20px" }} />
              </button>
            )}

            {itemCount(state, product.id) > 0 && (
              <span className={Styles.counter}> {itemCount(state, product.id)}</span>
            )}

            {isInCart(state, product.id) ? (
              <button
              className={Styles.smallButton}

                onClick={() =>
                  dispatch({ type: "INCREASE", payload: product })
                }>
                +
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: product })
                }>
                Add to Cart
              </button>
            )}
          </div>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
