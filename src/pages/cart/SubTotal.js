import React from "react";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useSelector } from "react-redux";
import BasicButtons from "../../components/buttons/Custom.button";
import { Box } from "@mui/material";

const SubTotal = () => {
  const data = useSelector((state) => state.cart.selectedItems);
  let prices = [];
  let total = 0;

  for (let d of data) {
    prices.push(d.price * d.counter);
  }
  for (let i = 0; i < data.length; i++) {
    total += prices[i];
  }
  const tax = total * 0.18;
  const totalItems = data.length;

  return (
    <Box sx={styles.subtotal}>
      <Box sx={styles.priceHeader}>
        <TableRow sx={styles.priceDeatils}>Price Details</TableRow>
      </Box>

      <Table sx={styles.countBox}>
        <TableRow>
          <TableCell
            sx={styles.tablecell}
          >{`Subtotal (Items: ${totalItems})`}</TableCell>
          <TableCell sx={styles.tablecell}>{`: ₹ ${total}`}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={styles.tablecell}>{`Tax  ${18}%`}</TableCell>
          <TableCell sx={styles.tablecell}>{`: ₹ ${tax.toFixed(2)}`}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={styles.tablecell}>Total</TableCell>
          <TableCell sx={styles.tablecell}>{`: ₹ ${(tax + total).toFixed(
            2
          )}`}</TableCell>
        </TableRow>
      </Table>
      <Box sx={styles.button}>
        <BasicButtons size="small" variant={"contained"}>
          Place Order
        </BasicButtons>
      </Box>
    </Box>
  );
};

export default SubTotal;

const styles = {
  tablecell: {
    border: "none",
  },
  subtotal: {
    border: "1px solid #00000033",
    borderRadius: "15px",
    margin: "5px",
    padding: "10px",
  },
  priceHeader: {
    borderBottom: "1px solid #80808029",
  },
  priceDeatils: {
    fontSize: "large",
    fontWeight: "600",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  countBox: {
    paddingLeft: "10px",
  },
};
