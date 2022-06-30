import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../store/cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const quantity = cart.totalQuantity

  const handleShowCart = () => {
    dispatch(setShowCart())
  }

  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
