import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { remove, increase, decrease } from "../features/cart/cartSlice";

function StockItem({ id, title, img, price, amount }) {
  const dispatch = useDispatch();
  return (
    <article className="stock-item">
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <h3 className="price">${price}</h3>
        <button className="remove-btn" onClick={() => dispatch(remove(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(remove(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default StockItem;
