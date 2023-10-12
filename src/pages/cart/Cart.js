import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SubTotal from "./SubTotal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { addToCart } from "../../store/actions/cart.action";
import { Box, TableBody } from "@mui/material";

function Cart() {
  const data = useSelector((state) => state.cart.selectedItems);
  console.log("carted ", data);
  const tableHeader = [
    "Image",
    "Name",
    "Discreption",
    "Unit",
    "Qty",
    "Price",
    "Remove",
  ];
  // console.log("my cart data", data);

  const dispatch = useDispatch();

  const addBtn = (row) => {
    const addedItems = data.find((el) => el.id === row.id);
    if (addedItems.counter <= 9) {
      const added = [...data].map((el) => {
        if (el.id === row.id) {
          return { ...el, counter: el.counter + 1 };
        }
        return el;
      });
      dispatch(addToCart(added));
    }
    return;
  };

  const subBtn = (row) => {
    const addedItems = data.find((el) => el.id === row.id);
    if (addedItems.counter >= 2) {
      const sub = [...data].map((el) => {
        if (el.id === row.id) return { ...el, counter: el.counter - 1 };
        return el;
      });
      dispatch(addToCart(sub));
    }
    return;
  };

  const removeHandler = (row) => {
    console.log("row", row);
    const cartRemoved = data.find((el) => el.id === row.id);
    if (cartRemoved) {
      const filtredData = data.filter((el) => el.id !== row.id);
      dispatch(addToCart(filtredData));
    }
  };

  const items = data.length;
  return (
    <Box sx={styles.mainCart}>
      <Box sx={styles.box1}>
        <Table sx={styles.rowdata}>
          <TableHead>
            <TableRow>
              {tableHeader.map((el) => {
                return <TableCell sx={{ fontWeight: "600" }}>{el}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <img
                    style={{ width: "20px", height: "50px" }}
                    src={row.image}
                    alt=""
                  />
                </TableCell>
                <TableCell>{row.winery}</TableCell>
                <TableCell>{row.wine}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <ButtonGroup>
                    <Button
                      onClick={() => {
                        subBtn(row);
                      }}
                      key="one"
                      sx={{ borderStyle: "none", borderRadius: "10px" }}
                      variant="text"
                    >
                      -
                    </Button>
                    <p className="qty">{row.counter}</p>
                    <Button
                      onClick={() => {
                        addBtn(row);
                      }}
                      key="one"
                      variant="text"
                      sx={{
                        borderStyle: "none",
                        borderRadius: "3px",
                        marginRight: "2px",
                      }}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell>{`₹ ${row.price * row.counter}`}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      removeHandler(row);
                    }}
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box sx={styles.box2}>
        <SubTotal />
      </Box>
    </Box>
  );
}

export default Cart;

const styles = {
  mainCart: {
    display: "flex",
    flexDirection: "row",
    marginTop: "80px",
  },
  box1: { overflowY: "scroll", height: "calc(100vh - 80.5px)", width: "80%" },
  box2: { marginTop: "80px", width: "20%" },
  img: {
    width: "30px",
    height: "70px",
  },
  rowdata: {
    height: "100px",
    overflow: "auto",
    scroll: "",
  },
};
