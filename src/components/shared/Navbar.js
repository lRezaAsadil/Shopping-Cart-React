import React, { useContext } from "react";
import { Link } from "react-router-dom";
import shopIcon from "../../assets/icons/shop.svg";
import { CartContext } from "../../contexts/CartContextProvider";
import Styles from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { state } = useContext(CartContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none",
            }}>
            <Link className={Styles.productLink} to="/products">
              Poducts
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <div className={Styles.listContainer}>
                  <ul>
                    <li>
                      <Link
                        className={Styles.listContainerLink2}
                        to="/products/men's clothing">
                        men's
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={Styles.listContainerLink2}
                        to="/products/women's clothing">
                        women's
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={Styles.listContainerLink2}
                        to="/products/jewelery">
                        jewelery
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={Styles.listContainerLink2}
                        to="/products/electronics">
                        electronics
                      </Link>
                    </li>
                  </ul>
                </div>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <Link className={Styles.productLink} to="/products">
              Poducts
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <div className={Styles.iconContainer}>
              <Link className={Styles.iconContainer} to="/cart">
                <img src={shopIcon} alt="shop" />
              </Link>
              <span>{state.itemsCounter}</span>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
