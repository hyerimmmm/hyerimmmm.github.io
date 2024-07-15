import React, { useCallback, useState } from "react";
import "./css/style.css";
import Post from "../../components/Post/Post";
import CommentPopup from "../../components/CommentPopup/CommentPopup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBtn from "../../components/NavBtn/NavBtn";
import { useNavigate } from "react-router-dom";

const Main = ({ onNavBar }) => {
  const story_layouts = useSelector((state) => state);
  const navigate = useNavigate();
  const [data, setData] = useState(post_layouts);
  const [selectData, setSelectData] = useState(undefined);
  const selectArr = data[selectData];
  const [likeInfo, setLikeInfo] = useState(null);
  const dispatch = useDispatch();

  const onCommentPopup = useCallback((idx) => {
    setSelectData(idx);
  }, []);

  return (
    <div className="main-page">
      <div className="container">
        <div className="body-section">
          <div className="section">
            <div className="story-wrapper">
              {story_layouts.map((item, idx) => {
                return (
                  <div key={idx} className="story">
                    {item.onStory ? (
                      <canvas className="story-circle"></canvas>
                    ) : null}
                    <div
                      style={{ backgroundImage: `url(${item.bg})` }}
                      className="profile-img"
                      onClick={() => {
                        dispatch({ type: "ONSTORY", idx });
                        navigate("/stories");
                        onNavBar("noNav", idx);
                      }}
                    ></div>
                    <div className="user-name">{item.user_name}</div>
                  </div>
                );
              })}
            </div>
            <div className="post-wrapper">
              {data.map((item, idx) => {
                return (
                  <Post
                    key={idx}
                    idx={idx}
                    write={item.write}
                    onCommentPopup={() => onCommentPopup(idx)}
                    data={data}
                    bg={item.bg}
                    like={item.like}
                    user_name={item.user_name}
                    img={item.picture}
                  />
                );
              })}
            </div>
          </div>
          <div className="aside"></div>
        </div>
      </div>
      {selectArr && (
        <CommentPopup
          write={selectArr.write}
          setSelectData={setSelectData}
          likeCount={selectArr.like}
          img={selectArr.picture}
          bg={selectArr.bg}
          user_name={selectArr.user_name}
          isLike={selectArr.isLike}
          index={selectData}
        />
      )}
    </div>
  );
};

export default Main;

const post_layouts = [
  {
    bg: "./assets/profile/IMG_0881.JPG",
    user_name: "i.love.you",
    picture: [
      "./assets/feed/picture1.jpeg",
      "./assets/feed/picture1-2.jpeg",
      "./assets/feed/picture1-4.jpeg",
    ],
    like: 1003,
    write: `섬나라에서 왔어요, 현지 분위기를
  느낄 수 있는 일본화로구이 전문점🥩 #모토이시
  
  작은 화로위에 꼬기 올려서 구워먹는
  일본갬성 가득한 야끼니꾸맛집 !!!
  
  와규육회, 나베동 등 다양한 서브메뉴도
  취향에 맞게끔 주문해서 먹을 수 있다구💛
  
  주말 웨이팅필수@@
  
  📍 대구 중구 종로 28 (네이버예약가능)
  📍 매일 16:00 - 01:00 / L.O 00:00 / 연중무휴
  
  #종로술집#대구와규#대구맛집투어#대구핫플#대구여행`,
  },
  {
    bg: "./assets/profile/IMG_0884.JPG",
    user_name: "1999_0114",
    picture: [
      "./assets/feed/picture2.jpeg",
      "./assets/feed/picture2-2.jpeg",
      "./assets/feed/picture2-3.jpeg",
    ],
    like: 348,
    write: `송정으로 놀러온 날, 자쿠지에서 회도 먹고 불멍도 하고`,
  },
  {
    bg: "./assets/profile/IMG_1826.JPG",
    user_name: "sshhrrr",
    picture: ["./assets/feed/picture3.jpeg"],
    like: 20,
    write: `오늘 하늘 너무 예쁨! 구름 한 점 없는 파란 하늘보다 구름이 뭉개뭉개있는게 더 좋아`,
  },
  {
    bg: "./assets/profile/IMG_4296.JPG",
    user_name: "61_53kg",
    picture: ["./assets/feed/picture4.jpeg"],
    like: 56,
    write: `일하는데 발 아파서 새로 장만했지렁~ 근데 일하러 가는데 새신발 신기 넘 아깝다ㅠ`,
  },
  {
    bg: "./assets/profile/IMG_4879.JPG",
    user_name: "hyerim_0114",
    picture: ["./assets/feed/picture5.jpeg"],
    like: 2844,
    write: `시나모롤 책갈피! 책갈피 7000원에 택배비 7000원인건 안 비밀`,
  },
  {
    bg: "./assets/profile/IMG_0101.JPG",
    user_name: "tjgpfla",
    picture: [
      "./assets/feed/picture6.jpeg",
      "./assets/feed/picture6-7.jpeg",
      "./assets/feed/picture6-6.jpeg",
      "./assets/feed/picture6-5.jpeg",
      "./assets/feed/picture6-4.jpeg",
      "./assets/feed/picture6-3.jpeg",
      "./assets/feed/picture6-2.jpeg",
      "./assets/feed/picture6-1.jpeg",
    ],
    like: 5342,
    write: `내 생일잔치`,
  },
  {
    bg: "./assets/profile/IMG_2897.JPG",
    user_name: "hyerimmmm",
    picture: ["./assets/feed/picture7.jpeg"],
    like: 321,
    write: `이거 너무 맛있더라. 명란 이즈 뭔들`,
  },
  {
    bg: "./assets/profile/IMG_4359.JPG",
    user_name: "hyerim_lov",
    picture: ["./assets/feed/picture8.jpeg"],
    like: 789,
    write: `갬성샷`,
  },
];

// const nav_layouts = [
//   {
//     img: "./assets/main/home.svg",
//     title: "홈",
//     type: "change-page",
//   },
//   // {
//   //   img: "./assets/main/search.svg",
//   //   title: "검색",
//   //   type: "open-side",
//   // },
//   {
//     img: "./assets/main/quest.svg",
//     title: "탐색 탭",
//     type: "explore",
//   },
//   // {
//   //   img: "./assets/main/reels.svg",
//   //   title: "릴스",
//   //   type: "change-page",
//   // },
//   // {
//   //   img: "./assets/main/msg.svg",
//   //   title: "메세지",
//   //   type: "open-side",
//   // },
//   {
//     img: "./assets/main/heart.svg",
//     title: "알림",
//     type: "open-side",
//   },
//   {
//     img: "./assets/main/newpost.svg",
//     title: "만들기",
//   },
//   // {
//   //   img: "./assets/main/seemore.svg",
//   //   title: "더보기",
//   // },
// ];
