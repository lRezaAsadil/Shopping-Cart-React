import React, { useContext } from "react";
import { Link } from "react-router-dom";
import shopIcon from "../../assets/icons/shop.svg";
import { CartContext } from "../../contexts/CartContextProvider";

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div>
      <div>
        <Link to="/products">Poducts</Link>
        <div>
          <ul>
            <li>
              <Link to="/products/men's clothing">men's</Link>
            </li>
            <li>
              <Link to="/products/women's clothing">women's</Link>
            </li>
            <li>
              <Link to="/products/jewelery">jewelery</Link>
            </li>
            <li>
              <Link to="/products/electronics">electronics</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/cart">
            <img src={shopIcon} alt="shop" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
