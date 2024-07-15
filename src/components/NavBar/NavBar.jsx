import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import NavBtn from "../NavBtn/NavBtn";
import "./css/style.css";

const NavBar = () => {
  const story_layouts = useSelector((state) => state);
  const [navType, setNavType] = useState("");
  const onNavType = useCallback(
    (type) => {
      if (navType === "") {
        setNavType(type);
      } else {
        setNavType("");
      }
    },
    [navType]
  );
  return (
    <>
      <div className={`nav-section ${navType}-nav-section`}>
        <div className="content">
          <div className="logo">
            {navType === "open-side" ? (
              <img src="./assets/main/logo2.svg" alt="" />
            ) : (
              <img src="./assets/main/logo.svg" alt="" />
            )}
          </div>
          <div className="nav-wrapper">
            <div className="nav">
              {nav_layouts.map((item, idx) => {
                return (
                  <NavBtn
                    key={idx}
                    img={item.img}
                    title={item.title}
                    type={item.type}
                    onNavType={onNavType}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {navType === "open-side" ? (
        <div className="notice-wrapper">
          <div className="notice-wrap">
            <div className="title">알림</div>
            <div className="today-notice-wrapper">
              <div className="sub-title">오늘</div>
              {story_layouts.map((item, idx) => {
                return (
                  <div key={idx} className="content-wrapper">
                    <div
                      className="content-left"
                      style={{ backgroundImage: `url(${item.bg})` }}
                    />
                    <div className="content-right">
                      <span className="user-name">{item.user_name}</span>님이
                      회원님의 사진을 좋아합니다.
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
const nav_layouts = [
  {
    img: "./assets/main/home.svg",
    title: "홈",
    type: "main",
  },
  // {
  //   img: "./assets/main/search.svg",
  //   title: "검색",
  //   type: "open-side",
  // },
  {
    img: "./assets/main/quest.svg",
    title: "탐색 탭",
    type: "explore",
  },
  // {
  //   img: "./assets/main/reels.svg",
  //   title: "릴스",
  //   type: "change-page",
  // },
  // {
  //   img: "./assets/main/msg.svg",
  //   title: "메세지",
  //   type: "open-side",
  // },
  {
    img: "./assets/main/heart.svg",
    title: "알림",
    type: "open-side",
  },
  // {
  //   img: "./assets/main/newpost.svg",
  //   title: "만들기",
  // },
  // {
  //   img: "./assets/main/seemore.svg",
  //   title: "더보기",
  // },
];
