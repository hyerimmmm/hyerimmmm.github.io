import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./css/style.css";

const Story = ({ idx, onNavBar }) => {
  const story_layouts = useSelector((state) => state);
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(idx);
  const [showLine, setShowLine] = useState(false);
  const onPrev = useCallback(() => {
    setCurrentIdx((idx) => (idx === 0 ? story_layouts.length - 1 : idx - 1));
  }, []);
  const onNext = useCallback(() => {
    setCurrentIdx((idx) => (idx === story_layouts.length - 1 ? 0 : idx + 1));
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowLine(true);
    }, 100);

    const timer = setTimeout(() => {
      if (currentIdx !== story_layouts.length - 1)
        setCurrentIdx(currentIdx + 1);
      setShowLine(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIdx, showLine]);

  return (
    <div className="story-page">
      <img className="logo" src="./assets/main/logo.svg" alt="" />
      <img
        className="close-btn"
        src="./assets/main/close.svg"
        alt=""
        onClick={() => {
          navigate("/");
          onNavBar("YesNavBar");
        }}
      />
      <div className="container">
        {/* {story_layouts.map((item, idx) => {
          return ( */}

        <div className="story-wrapper">
          {currentIdx === 0 ? null : (
            <button className="left-btn" onClick={onPrev} />
          )}
          <div
            className="story"
            style={{
              backgroundImage: `url(${story_layouts[currentIdx].story})`,
            }}
          >
            <div className={`line ${showLine ? "active" : ""}`}></div>
            <div className="user-info">
              <div
                className="user-bg"
                style={{
                  backgroundImage: `url(${story_layouts[currentIdx].bg})`,
                }}
              ></div>
              <div className="user-name">
                {story_layouts[currentIdx].user_name}
              </div>
            </div>
          </div>

          {currentIdx === story_layouts.length - 1 ? null : (
            <button className="right-btn" onClick={onNext} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Story;
