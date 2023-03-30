import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer">
          <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
          </div>
          <ul class="menu">
            <li class="menu">
              <Link class="menu__link" to="/products/men's clothing">
                men's
              </Link>
            </li>
            <li class="menu">
              <Link class="menu__link" to="/products/women's clothing">
                women's
              </Link>
            </li>
            <li class="menu">
              <Link class="menu__link" to="/products/jewelery">
                jewelery
              </Link>
            </li>
            <li class="menu">
              <Link class="menu__link" to="/products/electronics">
                electronics
              </Link>
            </li>
          </ul>
          <ul class="menu">
            <li class="menu__item">
              <a class="menu__link" href="#d">
                Home
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#d">
                About
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#d">
                Services
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#d">
                Team
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="#d">
                Contact
              </a>
            </li>
          </ul>
          <p>&copy;11228 Reza Asadi</p>
        </footer>
      </div>
    );
  }
}
