import React from "react";
import "./css/style.css";

const JoinInput = ({
  placeholder,
  onChange,
  inputType,
  isInfo,
  value,
  onPwShow,
  pwShow,
  type,
}) => {
  return (
    <div className="join-input">
      <input
        onChange={(e) => onChange(e.target.value, type)}
        className="input"
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {/* {isInfo ? (
        <div className="input-right">
          <div className="success-msg" />
          {pwShow ? (
            <button className="pw-show-btn pw-not-show-btn" onClick={onPwShow}>
              숨기기
            </button>
          ) : (
            <button className="pw-show-btn" onClick={onPwShow}>
              비밀번호 표시
            </button>
          )}{" "}
        </div>
      ) : (
        <div className={value === "" ? "display-none" : "err-msg"} />
      )} */}
    </div>
  );
};

export default JoinInput;
