import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LiquorIcon from "@mui/icons-material/Liquor";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsApi_action } from "../../store/actions/productsApi_action";
import { Input, TextField } from "@mui/material";
import { SearchInput } from "../../components/custom.searchInput";
import Products from "../products/Products";
import { cartReducer } from "../../store/reducers/cart.reducer";
import { searchProducts } from "../../store/actions/search.action";
import { filterDataHandler } from "../../store/actions/cart.action";
import classes from "./Header.module.css";
import Cart from "../../assests/emptyCart.png";

function ResponsiveAppBar(props) {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pages = ["Home", "Products", "Cart"];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const data = useSelector((state) => state.products_api_data.data);
  const search = useSelector((state) => state.cart.searchInput);
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  const count = selectedItems.length;
  const filterData = data.filter((el) => {
    return el.winery.toLowerCase().includes(search);
  });
  dispatch(filterDataHandler(filterData));

  const searchInputHandler = (event) => {
    dispatch(searchProducts(event.target.value.toLowerCase()));
  };

  const clearSearchHandler = (clear) => {
    dispatch(searchProducts(clear));
  };

  return (
    <>
      <header className={classes.main}>
        <div className={classes.header}>
          <nav>
            <p>STORE</p>
          </nav>
          <nav className={classes.buttons}>
            <Box>
              <SearchInput
                value={search}
                onChange={searchInputHandler}
                onClick={() => clearSearchHandler("")}
              />
            </Box>
            <p>
              <NavLink to="/" className={classes.navlink}>
                Home
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/Products"
                className={classes.navlink}
                onClick={() => {
                  dispatch(productsApi_action());
                }}
              >
                Products
              </NavLink>
            </p>
            <p className={classes.cartp}>
              <NavLink to="/cart" className={classes.navlink}>
                cart
              </NavLink>
              <img className={classes.img} src={Cart} alt="cart" />
            </p>
          </nav>
        </div>
        <div className={classes.count}>
          <p>{count}</p>
        </div>
      </header>
    </>
  );
}
export default ResponsiveAppBar;
