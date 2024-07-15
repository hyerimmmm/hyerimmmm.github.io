import React from "react";
import "./css/style.css";
import PostComment from "../PostComment/PostComment";
import PostReaction from "../PostReaction/PostReaction";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostWrite = ({
  user_name,
  type,
  likeCount,
  onCommentPopup,
  write,
  bg,
  index,
}) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [seeMore, setSeeMore] = useState(null);
  const story_layouts = useSelector((state) => state);
  const dispatch = useDispatch();
  const [commentLike, setCommentLike] = useState(false);
  const onChangeComment = useCallback(
    (e) => {
      setComment(e.target.value);
    },
    [comment]
  );
  const onResetComment = () => {
    setComment("");
  };
  const onCommentLike = useCallback(() => {
    setCommentLike(!commentLike);
  }, [commentLike]);

  const onSeeMore = useCallback(() => {
    setSeeMore("seemore-write-view");
    // setSeeMore((type = "detail"));
  }, []);
  return (
    <div className={`post-write-page ${type}-post-write-page`}>
      <div className={`write-wrapper ${type}-write-wrapper`}>
        <div className={`write-content ${type}-write-content`}>
          {type === "detail" ? (
            <div
              className="profile-img"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
          ) : null}
          <div className={`write-view ${seeMore} ${type}-write-view`}>
            <button className="user-name">{user_name}</button>
            <span className="write">{write}</span>
          </div>
        </div>
        {type === "detail"
          ? story_layouts[index].commentList.map((item, idx) => {
              return (
                <div key={idx} className="comments">
                  <div className="comment-left">
                    <div
                      className="profile-img"
                      style={{ backgroundImage: `url(${bg})` }}
                    ></div>
                    <div className="comment-content">
                      <div className="comment-content-top">
                        <button className="user-name">{user_name}</button>
                        <span key={idx} className="comment">
                          {item}
                        </span>
                      </div>
                      <div className="comment-content-bottom">
                        <div className="time">10주</div>
                        <div className="comment-like-count"></div>
                        <div className="reply">답글달기</div>
                      </div>
                    </div>
                  </div>
                  {commentLike ? (
                    <img
                      className="comment-like-img"
                      src="./assets/main/like.svg"
                      alt=""
                      onClick={onCommentLike}
                    />
                  ) : (
                    <img
                      className="like-img"
                      src="./assets/main/heart.svg"
                      alt=""
                      onClick={onCommentLike}
                    />
                  )}
                </div>
              );
            })
          : null}
      </div>
      {write.length > 40 && seeMore === null && type === "post" ? (
        <button className="seemore" onClick={onSeeMore}>
          더 보기
        </button>
      ) : null}
      {story_layouts[index].commentList.length > 0 && type === "post" ? (
        <button onClick={onCommentPopup} className="comment-count">
          댓글 {story_layouts[index].commentList.length}개 모두 보기
        </button>
      ) : null}
      <div className="write-input">
        {type === "detail" ? (
          <PostReaction type={type} likeCount={likeCount} idx={index} />
        ) : null}
        <PostComment
          // onCreateComment={onCreateComment}
          onChangeComment={onChangeComment}
          comment={comment}
          commentList={commentList}
          type={type}
          idx={index}
          onResetComment={onResetComment}
        />
      </div>
    </div>
  );
};

export default PostWrite;
