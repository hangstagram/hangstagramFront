import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function Register() {
  const [input, setInput] = useState({
    id: "",
    pw: "",
    // user:"",
    // email: "",
  });

  const navigate = useNavigate()
  
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const vaildateId = () => {
    const idRegex = /^[a-zA-Z0-9]{4,12}$/;

    if (!idRegex.test(input.id)) {
      setInput("");
      window.alert("아이디는 4자리 이상 12자리 이하입니다 영어와 숫자가 포함되어야 합니다");
    } else {
      setInput((prev) => ({
        ...prev,
        id: "",
      }));
    }
  };

  const validatePw = () => {
    const pwRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

    if (!pwRegex.test(input.pw)) {
      setInput("");
      window.alert("비밀번호는 8자리 이상 15자리 이하입니다 영문과 특수문자를 포함해야 합니다");
    } else {
      setInput((prevErrors) => ({
        ...prevErrors,
        pw: "",
      }));
    }
  };
  const validateName = () => {
    const nameRegex = /^[가-힣]{2,5}$/;

    if (!nameRegex.test(input.name)) {
      setInput("");
      window.alert("2자리 이상 5자리 이하 한글입니다");
    } else {
      setInput((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(input.email)) {
      setInput("");
      window.alert("이메일 형식이 아닙니다");
    } else {
      setInput((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const handleRegister = async () => {
    // vaildateId();
    // validatePw();
    // validateName()
    // validateEmail()
    try {
      const response = await axios.post("http://3.34.144.155:8080/api/signup", {
        id: input.id,
        password: input.pw
      },
      {withCredentials: true })
      console.log("response", response);
      navigate("/login")
    } catch (error) {
      console.log('error', error)
      setInput('')
      // window.alert(`Error: ${error.response.data.message}`);
    }
  };

  const onRegister = () => {
    if (input.id !=='' && input.pw !=='') {
      handleRegister()
    } else {
      window.alert('아이디와 비밀번호를 입력하세요')
      setInput('')
    }
  } 

  return (
    <div>
      <RegisterWrap>
        <InputBox
          type="text"
          placeholder="ID"
          value={input.id}
          name="id"
          onChange={handleInput}
        />
        <InputBox
          type="text"
          placeholder="password"
          value={input.pw}
          name="pw"
          onChange={handleInput}
        />
        {/* <InputBox
          type="text"
          placeholder="username"
          value={input.user}
          name="user"
          onChange={handleInput}
        />
        <InputBox
          type="text"
          placeholder="E-mail"
          value={input.email}
          name="email"
          onChange={handleInput} */}
        {/* /> */}
        <RegisterButton onClick={onRegister}>회원가입</RegisterButton>
      </RegisterWrap>
    </div>
  );
}

export default Register;

export const RegisterWrap = styled.div`
  width: 50vw;
  height: 50vh;
  margin: 100px auto;
  padding: 20px 20px 80px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const InputBox = styled.input`
  width: 80%;
  height: 10%;
  border: 1px solid gray;
  border-radius: 10px;
`;

export const RegisterButton = styled.button`
  width: 80%;
  background-color: #fff;
  height: 10%;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;
