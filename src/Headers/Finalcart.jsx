import React, { useReducer } from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeslectedproduct } from "../redux/action/index";
import "../Allpages/Mainpage.css";
import { Link } from "react-router-dom";
export default function Finalcart() {
  const disptach = useDispatch();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  function handleClick() {
    forceUpdate();
  }
  let select = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  console.log(select);
  function selecteditemsfunction() {
    var html = [];
    var Total_Amount = 0;
    if (select.length >= 1) {
      {
        select.map((val) => {
          products.map((data, index) => {
            if (val == data.id) {
              console.log("fine i am working");
              html.push(
                <div key={index} className="items_main_dev">
                  <img className="images" src={data.image} alt="title" />
                  <div className="sub_elements">
                    <span className="no_emi">{data.title}</span>
                    <span>Deal of the Day: {data.price} $ M.R.P</span>
                    <span>
                      {" "}
                      {data.count} ratings {data.rating.rate}
                    </span>
                    <span className="no_emi">
                      No Cost EMI: Avail No Cost EMI on select cards for orders
                      above ₹3000 DetailsNo Cost EMI: Avail No Cost EMI on
                      select cards for orders above ₹3000 Details
                    </span>
                    <button
                      className="button_addtocart"
                      onClick={() => selecteditemsss(data.id)}
                    >
                      Remove to cart
                    </button>
                  </div>
                </div>
              );
              {
                Total_Amount = Total_Amount + data.price;
              }
            }
          });
        });
      }
      console.log(html);
      console.log(Total_Amount, "Total Amount is");
      return (
        <div className="Main_cls">
          <div className="all_items left_cls">{html}</div>
          <div className="right_cls">{orderlist()}</div>
        </div>
      );
      function orderlist() {
        return (
          <div>
            <div className="order_slip">
              <div>Total Number of items {select.length}</div>
              <div> Total Amount is {Total_Amount} $</div>
              <Link to="/payments">
                <button>proceed to buy</button>
              </Link>
            </div>
          </div>
        );
      }
      function selecteditemsss(id) {
        const array = select;
        console.log(array);
        const index = array.indexOf(id);
        if (index > -1) {
          array.splice(index, 1);
        }
        console.log(array);
        handleClick();
        disptach(removeslectedproduct(array));
      }
    } else {
      return (
        <h1>
          <p className="add_items_incart">
            {" "}
            NO ITEMS FOUND !! PLEASE ADD THE ITEMS :)
          </p>
        </h1>
      );
    }
  }
  return <div>{selecteditemsfunction()}</div>;
}
