import React from "react";
import "./css/style.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header-component">
      <div className="container">
        <div className="title">Home</div>
        <div className="search-box">
          <img className="search-svg" src="./assets/search.svg" alt="" />
          <input className="search" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
