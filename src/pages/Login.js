import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputBox, Loginbutton, TextBox } from "../components/Register/Style";
import { RegisterWrap } from "../components/Register/Container";


function Login() {
  const [input, setInput] = useState({
    user: "",
    pw: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const LoginButton = () => {
    if (input.user === "" || input.pw === "") {
      window.alert("아이디와 비밀번호를 모두 입력하세요");
    } else {
      handelLogin();
    }
  };

  const handelLogin = async () => {
    try {
      const {headers} = await axios.post(
        "/api/user/login",
        {
          username: input.user,
          password: input.pw,
        },
        { withCredentials: true }
      );

      localStorage.setItem("isLogin", ` ${headers.authorization}`);
      console.log(headers);
      navigate("/");
    } catch (error) {
      console.log(`error, ${error}`);
      setInput({ user: "", pw: "" });
    }
  };

  return (
    <RegisterWrap>
      <div>
        <TextBox>아이디</TextBox>
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
          type="text"
          placeholder=""
          value={input.pw}
          name="pw"
          onChange={handleInput}
        />
      </div>
      <Loginbutton onClick={LoginButton}>로그인</Loginbutton>
      <Loginbutton onClick={() => navigate("/register")}>회원가입</Loginbutton>
    </RegisterWrap>
  );
}

export default Login;
