import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import JoinInput from "../../components/JoinInput/JoinInput";
import "./css/style.css";

const Join = ({ onNavBar }) => {
  const [pwShow, setPwShow] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: "fdsfds",
    name: "",
    nickname: "",
    pw: "",
  });

  const onUserInfo = useCallback(
    (value, type) => {
      console.log(userInfo[type]);
      setUserInfo((userInfo[type] = value));
    },
    [userInfo.id, userInfo.name, userInfo.nickname, userInfo.pw]
  );

  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [id, setId] = useState("");
  // const [pw, setPw] = useState("");

  // const [isEmail, setIsEmail] = useState(false);
  // const [isName, setIsName] = useState(false);
  // const [isId, setIsId] = useState(false);
  // const [isPw, setIsPw] = useState(false);

  // const onEmailChange = useCallback((e) => {
  //   const emailRegex =
  //     /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  //   setEmail(e.target.value);

  //   if (!emailRegex.test(e.target.value)) {
  //     setIsEmail(false);
  //   } else {
  //     setIsEmail(true);
  //   }
  // }, []);
  // const onNameChange = useCallback((e) => {
  //   setName(e.target.value);
  //   if (e.target.value.length < 1) {
  //     setIsName(false);
  //   } else {
  //     setIsName(true);
  //   }
  // }, []);
  // const onIdChange = useCallback((e) => {
  //   setId(e.target.value);
  //   if (e.target.value.length < 1) {
  //     setIsId(false);
  //   } else {
  //     setIsId(true);
  //   }
  // }, []);
  // const onPwChange = useCallback((e) => {
  //   setPw(e.target.value);
  //   if (e.target.value.length < 1) {
  //     setIsPw(false);
  //   } else {
  //     setIsPw(true);
  //   }
  //   console.log(e.target.value);
  // }, []);

  const onPwShow = useCallback(() => {
    setPwShow(!pwShow);
  }, [pwShow]);

  useEffect(() => {
    onNavBar("noNav");

    return () => {};
  }, []);

  return (
    <div className="join-page">
      <div className="join-wrapper">
        <div className="join-box">
          <div className="logo" />
          <div className="title">
            친구들의 사진과 동영상을 보려면 가입하세요.
          </div>
          <button className="facebook-login">
            <div className="facebook-logo" />
            <span>Facebook으로 로그인</span>
          </button>
          <div className="or-wrap">
            <div className="line" />
            <div className="or">또는</div>
            <div className="line" />
          </div>
          <JoinInput
            onChange={onUserInfo}
            value={userInfo.id}
            // isInfo={isEmail}
            // onChange={onEmailChange}
            // value={email}
            // inputType="text"
            placeholder="휴대폰 번호 또는 이메일 주소"
            type="id"
          />
          <JoinInput
            onChange={onUserInfo}
            value={userInfo.name}
            // isInfo={isName}
            // onChange={onNameChange}
            // value={name}
            placeholder="성명"
            // inputType="text"
            type="name"
          />
          <JoinInput
            onChange={onUserInfo}
            value={userInfo.nickname}
            // isInfo={isId}
            // onChange={onIdChange}
            // value={id}
            placeholder="사용자 이름"
            // inputType="text"
            type="nickname"
          />
          <JoinInput
            onChange={onUserInfo}
            value={userInfo.pw}
            // isInfo={isPw}
            // onChange={onPwChange}
            // value={pw}
            placeholder="비밀번호"
            // pwShow={pwShow}
            // onPwShow={onPwShow}
            // inputType={pwShow ? "text" : "password"}
            type="pw"
          />
          <div className="text">
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다.
            <button className="read-more">더 알아보기</button>
          </div>
          <button
          // className={`disabled-btn ${
          //   (isEmail && isId && isName && isPw) === true && "join-btn"
          // }`}
          >
            가입
          </button>
        </div>
        <div className="login-box">
          <div className="login-wrap">
            계정이 있으신가요?
            <button className="login-btn">로그인</button>
          </div>
        </div>
        <div className="download-box">
          <div className="text">앱을 다운로드하세요.</div>
          <div className="download-link-wrap">
            <img
              className="download-link"
              alt="App Store에서 다운로드"
              src="https://static.cdninstagram.com/rsrc.php/v3/yi/r/cWx_hQBPmbo.png"
            ></img>
            <img
              className="download-link"
              alt="Google Play에서 다운로드"
              src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
