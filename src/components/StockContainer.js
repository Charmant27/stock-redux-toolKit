import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StockItem from "./StockItem";
import { clearStock } from "../features/cart/cartSlice";
function StockContainer() {
  const { amount, total, stockItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section className="stock">
        <header>
          <h2>stock items</h2>
          <h3 className="empty-stock">
            looks like the stock is currently empty...
          </h3>
        </header>
      </section>
    );
  }

  return (
    <section className="stock">
      <header>
        <h2>stock items</h2>
      </header>
      {stockItems.map((item) => {
        return <StockItem key={item.id} {...item} />;
      })}

      <footer>
        <hr />
        <div className="stock-total">
          <h3>
            total<span>${total}</span>
          </h3>
        </div>
        <button
          className="clear-btn"
          onClick={() => console.log(dispatch(clearStock()))}
        >
          clean the stock
        </button>
      </footer>
    </section>
  );
}

export default StockContainer;
