import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import "./css/style.css";

const PostComment = ({
  comment,
  onChangeComment,
  onCreateComment,
  type,
  idx,
  onResetComment,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="post-comment-page">
      <div className={`comment-wrapper ${type}-comment-wrapper`}>
        {type === "detail" ? (
          <img
            className="emotion-img"
            src="./assets/main/big_emotion.svg"
            alt=""
          />
        ) : null}
        <input
          className="comment-input"
          placeholder="댓글 달기..."
          value={comment}
          onChange={onChangeComment}
        />
        {comment && type === "post" ? (
          <button
            onClick={() => {
              dispatch({ type: "ADDCOMMENT", idx, comment });
              onResetComment();
            }}
            className="comment-submit-btn"
          >
            게시
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({ type: "ADDCOMMENT", idx, comment });
              onResetComment();
            }}
            className={`comment-submit-btn ${type}-comment-submit-btn`}
          >
            게시
          </button>
        )}
        {type === "post" ? (
          <img src="./assets/main/emotion.svg" alt="" />
        ) : null}
      </div>
    </div>
  );
};

export default PostComment;
