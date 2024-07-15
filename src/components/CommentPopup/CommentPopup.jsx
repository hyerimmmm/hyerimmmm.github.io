import React from "react";
import PostHeader from "../PostHeader/PostHeader";
import PostPicture from "../PostPicture/PostPicture";
import PostWrite from "../PostWrite/PostWrite";
import PostReaction from "../PostReaction/PostReaction";
import "./css/style.css";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

const CommentPopup = ({
  bg,
  user_name,
  img,
  setSelectData,
  likeCount,
  write,
  index,
}) => {
  return (
    <div className="comment-popup-page">
      <div className="background"></div>
      <div className="container">
        <button
          className="close-btn"
          onClick={() => {
            setSelectData(undefined);
          }}
        >
          <img src="./assets/main/close.svg" alt="" />
        </button>
        <PostPicture img={img} />
        <div className="content">
          <PostHeader bg={bg} user_name={user_name} type="detail" />
          <PostWrite
            write={write}
            bg={bg}
            user_name={user_name}
            type="detail"
            likeCount={likeCount}
            index={index}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
