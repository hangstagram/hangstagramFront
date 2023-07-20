import React, { useState } from "react";
import api from "../Api/api"
import { useNavigate } from "react-router-dom";
import { InputBox, Loginbutton, RegisterButton, TextBox } from "../components/Register/Style";
import { RegisterWrap } from "../components/Register/Container";


function Register() {
  const [input, setInput] = useState({
    user: "",
    pw: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  // ____유효성 검사____
  // const vaildateId = () => {
  //   const idRegex = /^[a-zA-Z0-9]{4,12}$/;

  //   if (!idRegex.test(input.id)) {
  //     setInput({ user: "", pw: "", email: "" });
  //     window.alert(
  //       "아이디는 4자리 이상 12자리 이하입니다 영어와 숫자가 포함되어야 합니다"
  //     );
  //   } else {
  //     setInput((prev) => ({
  //       ...prev,
  //       id: "",
  //     }));
  //   }
  // };

  // const validatePw = () => {
  //   const pwRegex =
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

  //   if (!pwRegex.test(input.pw)) {
  //     setInput({ user: "", pw: "", email: "" });
  //     window.alert(
  //       "비밀번호는 8자리 이상 15자리 이하입니다 영문과 특수문자를 포함해야 합니다"
  //     );
  //   } else {
  //     setInput((prevErrors) => ({
  //       ...prevErrors,
  //       pw: "",
  //     }));
  //   }
  // };
  // const validateName = () => {
  //   const nameRegex = /^[가-힣]{2,5}$/;

  //   if (!nameRegex.test(input.name)) {
  //     setInput({ user: "", pw: "", email: "" });
  //     window.alert("2자리 이상 5자리 이하 한글입니다");
  //   } else {
  //     setInput((prevErrors) => ({
  //       ...prevErrors,
  //       name: "",
  //     }));
  //   }
  // };

  // const validateEmail = () => {
  //   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  //   if (!emailRegex.test(input.email)) {
  //     setInput({ user: "", pw: "", email: "" });
  //     window.alert("이메일 형식이 아닙니다");
  //   } else {
  //     setInput((prevErrors) => ({
  //       ...prevErrors,
  //       email: "",
  //     }));
  //   }
  // };

  const handleRegister = async () => {
    // vaildateId();
    // validatePw();
    // validateName()
    // validateEmail()
    try {
      const response = await api.post(
        "/user/signup",
        {
          username: input.user,
          password: input.pw,
          email: input.email,
        },
        { withCredentials: true }
      );

      console.log("response", response);
      navigate("/login");
    } catch (error) {
      setInput({ user: "", pw: "", email: "" });
      console.log("error", error);
    }
  };

  const onRegister = () => {
    if (input.id !== "" && input.pw !== "") {
      handleRegister();
    } else {
      window.alert("아이디와 비밀번호를 입력하세요");
      setInput({ user: "", pw: "", email: "" });
    }
  };

  return (
    <RegisterWrap>
      <div>
        <TextBox>닉네임</TextBox>
        <InputBox
          type="text"
          placeholder=""
          value={input.user}
          name="user"
          onChange={handleInput}
        />
      </div>
      <div>
        <TextBox>비밀번호</TextBox>
        <InputBox
          type="password"
          placeholder=""
          value={input.pw}
          name="pw"
          onChange={handleInput}
        />
      </div>
      <div>
        <TextBox>이메일</TextBox>
        <InputBox
          type="text"
          placeholder=""
          value={input.email}
          name="email"
          onChange={handleInput}
        />
      </div>
      <RegisterButton onClick={onRegister}>회원가입</RegisterButton>
      <Loginbutton onClick={() => navigate("/login")}>로그인하러</Loginbutton>
    </RegisterWrap>
  );
}

export default Register;


