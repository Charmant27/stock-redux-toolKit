import React from "react";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import StockContainer from "./components/StockContainer";
import { total } from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { stockItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total());
  }, [stockItems]);

  return (
    <main>
      <NavBar />
      <StockContainer />
    </main>
  );
}

export default App;
