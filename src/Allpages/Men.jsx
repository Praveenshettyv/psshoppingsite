import React from "react";
import "./Mainpage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatethecart } from "../redux/action/index";
import {Helmet} from "react-helmet";
export default function Men() {
  const disptach = useDispatch();
  function Menselected(id) {
    disptach(updatethecart(id));
  }
  const mens_data = useSelector((state) => state.products);
  return (
    <div className="all_items">
      <Helmet><title>MENS PRODUCTS</title></Helmet>
      {Array.from(mens_data)?.map((data) => {
        if (data.category == "men's clothing") {
          return (
            <div key={data.id} className="items_main_dev">
              <Link to={`/Product?${data.id} `}>
                <img className="images" src={data.image} alt="title" />
                <div className="sub_elements">
                  <span className="no_emi item_title">{data.title}</span>
                  <span>Deal of the Day: {data.price} $ M.R.P</span>
                  <span>
                    {" "}
                    {data.count} ratings {data.rating.rate}
                  </span>
                  <span className="no_emi">
                    No Cost EMI: Avail No Cost EMI on select cards for orders
                    above ₹3000 DetailsNo Cost EMI: Avail No Cost EMI on select
                    cards for orders above ₹3000 Details
                  </span>
                </div>
              </Link>
              <button
                className="button_addtocart"
                onClick={() => Menselected(data.id)}
              >
                Add to cart
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}
