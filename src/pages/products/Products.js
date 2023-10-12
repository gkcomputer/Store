import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cart.action";
import "./products.css";

function Products() {
  const data = useSelector((state) => state.products_api_data.data);
  const selectedItems = useSelector((state) => state.cart.selectedItems);
  const filteredData = useSelector((state) => state.cart.filteredData);
  const dispatch = useDispatch();

  const onClickHandler = (item) => {
    const addedItems = selectedItems.find((el) => el.id === item.id);
    if (addedItems) return;
    else {
      const singleItem = { ...item, counter: 1 };
      const data2 = [...selectedItems, singleItem];
      dispatch(addToCart(data2));
    }
  };

  return (
    <>
      <div className="products">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.wine}
            description={item.winery}
            onClick={() => onClickHandler(item)}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
