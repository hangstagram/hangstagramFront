import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

function Signup() {
  const [input, setInput] = useState({
    id: "",
    pw: "",
    user:"",
    email: "",
  });
  
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://3.38.191.164/register", {
        id: input.id,
        password: input.pw,
        username: input.user,
        email: input.email
      });
      console.log("response", response);
    } catch (error) {
      window.alert(`Error: ${error.response.data.message}`);
    }
  };

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
        <InputBox
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
          onChange={handleInput}
        />
        <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
      </RegisterWrap>
    </div>
  );
}

export default Signup;

const RegisterWrap = styled.div`
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

const InputBox = styled.input`
  width: 80%;
  height: 10%;
  border: 1px solid gray;
  border-radius: 10px;
`;

const RegisterButton = styled.button`
  width: 80%;
  background-color: #fff;
  height: 10%;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;
