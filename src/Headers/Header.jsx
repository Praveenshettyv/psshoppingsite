import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
export default function Header() {
  return (
    <div className="Header_main">
      <div className="Header_sub">
        <Link to="/">Home</Link>
        <Link to="/Men">Men</Link>
        <Link to="/Women">Women</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/cart">
          <Cart />
        </Link>
      </div>
    </div>
  );
}
