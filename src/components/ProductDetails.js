import { Rating } from "@mui/material";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContextProvider";
import { isInCart, itemCount } from "../helper/functions";
import { CartContext } from "../contexts/CartContextProvider";
import trash from "../assets/icons/trash.svg";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id - 1;
  const data = useContext(ProductsContext);
  const product = data[id];
  const { title, price, category, image, rating } = product;
  const { rate } = rating;
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p></p>
        <p>Category : {category}</p>
        <Rating
          name="half-rating"
          defaultValue={rate}
          precision={0.5}
          readOnly
        />

        <div>
          <span> {price} $ </span>

          <div>
            {itemCount(state, product.id) > 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: product })
                }>
                -
              </button>
            )}
            {itemCount(state, product.id) === 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: product })
                }>
                <img src={trash} alt="icon" style={{ width: "20px" }} />
              </button>
            )}

            {itemCount(state, product.id) > 0 && (
              <span> {itemCount(state, product.id)}</span>
            )}

            {isInCart(state, product.id) ? (
              <button
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
