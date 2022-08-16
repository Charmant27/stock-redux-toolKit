import React from "react";
import { ShopIcon } from "../icons";
import { useSelector } from "react-redux";

function NavBar() {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h2>stock cart</h2>
        <div className="nav-container">
          <ShopIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
