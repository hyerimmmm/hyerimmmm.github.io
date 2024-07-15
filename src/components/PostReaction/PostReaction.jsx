import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/style.css";

const PostReaction = ({
  like,
  onLike,
  onCommentPopup,
  type,
  likeCount,
  idx,
}) => {
  const story_layouts = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="post-reaction-page">
      <div className={`post-footer ${type}-post-footer`}>
        <div className={`reaction-wrapper ${type}-reaction-wrapper`}>
          <div className="reaction">
            {story_layouts[idx].isLike ? (
              <button className="reaction-btn">
                <img
                  className="like-btn"
                  onClick={() => {
                    dispatch({ type: "OFFLIKE", idx });
                  }}
                  src="./assets/main/like.svg"
                  alt=""
                />
              </button>
            ) : (
              <button className="reaction-btn">
                <img
                  onClick={() => {
                    dispatch({ type: "ONLIKE", idx });
                  }}
                  className="like-btn"
                  src="./assets/main/heart.svg"
                  alt=""
                />
              </button>
            )}
            <button className="reaction-btn" onClick={onCommentPopup}>
              <img src="./assets/main/comment.svg" alt="" />
            </button>
            <button className="reaction-btn">
              <img src="./assets/main/msg.svg" alt="" />
            </button>
          </div>
          <div
            className="save"
            onClick={() => {
              dispatch({ type: "ONSAVE", idx });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              color="rgb(245, 245, 245)"
              fill="rgb(245, 245, 245)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>저장</title>
              <polygon
                fill={story_layouts[idx].save ? `white` : `none`}
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>
        <div className={`like ${type}-like`}>
          좋아요 {story_layouts[idx].like}개
        </div>
      </div>
    </div>
  );
};

export default PostReaction;
