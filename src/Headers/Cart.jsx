import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
export default function Cart() {
  const select = useSelector((state) => state.cart);
  console.log(select,'this is cart value')
  return (
    <div>
      <div>
        <AiOutlineShoppingCart className="Cart_img" />
        <span className="Cart_items">{Object.keys(select).length}</span>
      </div>
    </div>
  );
}
