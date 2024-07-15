import React, { useCallback } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CommentPopup from "../../components/CommentPopup/CommentPopup";
import "./css/style.css";

const Explore = () => {
  const story_layouts = useSelector((state) => state);
  const [selectData, setSelectData] = useState(undefined);
  const selectArr = story_layouts[selectData];

  const onCommentPopup = useCallback((idx) => {
    setSelectData(idx);
  }, []);
  return (
    <div className="explore-page">
      {story_layouts.map((item, idx) => {
        return (
          <>
            <div
              className="picture-wrapper"
              onClick={() => {
                onCommentPopup(idx);
              }}
              style={{ backgroundImage: `url(${item.picture[0]})` }}
            >
              {selectArr ? null : (
                <div className="reaction-count">
                  <div className="reaction-heart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      color="white"
                      fill="white"
                      height="24"
                      role="img"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <title>좋아요</title>
                      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                    <div>{item.like}</div>
                  </div>
                  <div className="reaction-comment">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      color="white"
                      fill="white"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>댓글</title>
                      <path
                        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                        fill="white"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <div>{story_layouts[idx].commentList.length}</div>
                  </div>
                </div>
              )}
            </div>
          </>
        );
      })}
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
export default Explore;

const nav_layouts = [
  {
    img: "./assets/main/home.svg",
    title: "홈",
    type: "change-page",
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
  {
    img: "./assets/main/newpost.svg",
    title: "만들기",
  },
  // {
  //   img: "./assets/main/seemore.svg",
  //   title: "더보기",
  // },
];
