import React, { useContext } from "react";
import { Link } from "react-router-dom";
import shopIcon from "../../assets/icons/shop.svg";
import { CartContext } from "../../contexts/CartContextProvider";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.container}>
        <Link className={Styles.productLink} to="/products">
          Poducts
        </Link>
        <div className={Styles.listContainer}>
          <ul>
            <li>
              <Link
                className={Styles.listContainerLink}
                to="/products/men's clothing">
                men's
              </Link>
            </li>
            <li>
              <Link
                className={Styles.listContainerLink}
                to="/products/women's clothing">
                women's
              </Link>
            </li>
            <li>
              <Link
                className={Styles.listContainerLink}
                to="/products/jewelery">
                jewelery
              </Link>
            </li>
            <li>
              <Link
                className={Styles.listContainerLink}
                to="/products/electronics">
                electronics
              </Link>
            </li>
          </ul>
        </div>
        <div className={Styles.iconContainer}>
          <Link className={Styles.iconContainer} to="/cart">
            <img src={shopIcon} alt="shop" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
