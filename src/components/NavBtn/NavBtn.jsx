import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/style.css";

const NavBtn = ({ img, title, onNavType, type }) => {
  const navigate = useNavigate();
  console.log(type);
  return (
    <button
      className="nav-btn"
      onClick={() => {
        if (type === "explore") {
          navigate("/explore");
          onNavType("explore");
        } else if (type === "open-side") {
          onNavType("open-side");
        } else if (type === "main") {
          navigate("/");
          onNavType("main");
        }
      }}
    >
      <img src={img} alt="" />
      <div className="nav-text">{title}</div>
    </button>
  );
};

export default NavBtn;
