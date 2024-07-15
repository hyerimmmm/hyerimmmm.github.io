import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import "./css/style.css";

const PostPicture = ({ img }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const onPrev = useCallback(() => {
    setCurrentImgIdx((idx) => (idx === 0 ? img.length - 1 : idx - 1));
  }, []);
  const onNext = useCallback(() => {
    setCurrentImgIdx((idx) => (idx === img.length - 1 ? 0 : idx + 1));
  }, []);

  return (
    <div className="post-picture-page">
      <div className="picture">
        <img width="468px" height="585px" src={img[currentImgIdx]} alt="" />
        {currentImgIdx === 0 ? null : (
          <button className="left-btn" onClick={onPrev} />
        )}
        {currentImgIdx === img.length - 1 ? null : (
          <button className="right-btn" onClick={onNext} />
        )}
      </div>
    </div>
  );
};

export default PostPicture;
