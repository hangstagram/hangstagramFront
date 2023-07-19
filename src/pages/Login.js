import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import { InputBox, RegisterButton, RegisterWrap } from "./Register";

function Login() {
  const [input, setInput] = useState({
    id: "",
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
    if (input.id === "" || input.pw === "") {
      window.alert("아이디와 비밀번호를 모두 입력하세요");
    } else {
      handelLogin();
    }
  };

  const handelLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://3.34.144.155:8080/api/login",
        {
          id: input.id,
          password: input.pw,
        },
        { withCredentials: true }
      );

      cookie.set("id", jwtDecode(data.token).id, { path: "/", maxAge: 600 });
      cookie.set("accessToken", data.token, { path: "/", maxAge: 600 });
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(`error, ${error.message}`);
      setInput({ id: "", pw: "" });
    }
  };

  return (
    <RegisterWrap>
      <InputBox
        type="text"
        placeholder="아이디"
        value={input.id}
        name="id"
        onChange={handleInput}
      />
      <InputBox
        type="text"
        placeholder="비밀번호"
        value={input.pw}
        name="pw"
        onChange={handleInput}
      />
      <RegisterButton onClick={LoginButton}>로그인</RegisterButton>
    </RegisterWrap>
  );
}

export default Login;
