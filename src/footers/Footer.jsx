import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer_cls">
      <div className="footer_clsss">
        <span>
          <Link className="a_tag_footer" to="/Privacy_Policy">
            Privacy Policy
          </Link>
        </span>
        ||
        <span>
          <Link className="a_tag_footer" to="/Terms_and_Conditions">
            Terms and Conditions
          </Link>
        </span>
        ||
        <span>
          <Link className="a_tag_footer" to="/Cookies">
            Cookies
          </Link>
        </span>
      </div>
      <br />
      <br />
      <div className="social_icon">
        <span>
          <BsFacebook />
        </span>
        <span>
          <BsInstagram />
        </span>
        <span>
          <BsYoutube />
        </span>
        <Link to="/whatsapp">
          <BsWhatsapp />
        </Link>
      </div>
      <div className="mail">
        ©2022 ps mart shooping site india marketing pvt. ltd...
      </div>
    </footer>
  );
}
