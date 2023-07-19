import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import { InputBox, RegisterWrap, TextBox } from "./Register";
import { Loginbutton } from "./Register";

function Login() {
  const [input, setInput] = useState({
    user: "",
    pw: "",
  });

  const cookie = new Cookies();

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
      const { data } = await axios.post(
        "/api/user/login",
        {
          username: input.user,
          password: input.pw,
        },
        { withCredentials: true }
      );

      // cookie.set("username", jwtDecode(data.token).username, {
      //   path: "/",
      //   maxAge: 600,
      // });
      cookie.set("accessToken", data.token, { path: "/", maxAge: 600 });
      console.log(data);
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
