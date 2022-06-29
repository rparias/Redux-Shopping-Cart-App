import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const quantity = cart.totalQuantity

  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
