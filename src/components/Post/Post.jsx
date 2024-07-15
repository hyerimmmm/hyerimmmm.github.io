import React, { useCallback } from "react";
import "./css/style.css";
import PostHeader from "../PostHeader/PostHeader";
import PostPicture from "../PostPicture/PostPicture";
import PostReaction from "../PostReaction/PostReaction";
import PostWrite from "../PostWrite/PostWrite";
import { useState } from "react";

const Post = ({
  data,
  bg,
  user_name,
  img,
  like,
  onCommentPopup,
  write,
  idx,
}) => {
  const [isLike, setIsLike] = useState(false);
  const [likeInfo, setLikeInfo] = useState(null);
  const [likeCount, setLikeCount] = useState(like);

  return (
    <div>
      <div className="post">
        <PostHeader bg={bg} user_name={user_name} type="list" />
        <PostPicture img={img} />
        <PostReaction
          onCommentPopup={onCommentPopup}
          like={like}
          // onLike={() => onLike(idx)}
          isLike={isLike}
          likeCount={likeCount}
          likeInfo={likeInfo}
          idx={idx}
          type="post"
        />
        <PostWrite
          write={write}
          onCommentPopup={onCommentPopup}
          user_name={user_name}
          isLike={isLike}
          type="post"
          index={idx}
        />
      </div>
    </div>
  );
};

export default Post;
