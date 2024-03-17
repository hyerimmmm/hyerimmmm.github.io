import React from "react";
import "./css/style.css";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="nav-component">
      <img className="profile-img" src="./assets/IMG_0397.JPG" alt="" />
      <div className="name">Seo Hyerim</div>
      <div className="bio">
        적극적인 소통 능력과 배움에 열정을 가진 개발자, 서혜림입니다.
      </div>
    </div>
  );
};

export default Nav;
