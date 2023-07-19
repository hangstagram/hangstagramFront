import { styled } from "styled-components";

const RegisterWrap = styled.div`
  width: 30vw;
  height: 50vh;
  margin: 100px auto;
  /* background-color: #96FFFF; */
  padding: 20px 20px 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InputBox = styled.input`
  width: 120px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const RegisterButton = styled.button`
  width: 200px;
  background-color: #fff;
  height: 40px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;

const Loginbutton = styled.button`
  width: 200px;
  background-color: #fff;
  height: 40px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;

const TextBox = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  background-color: #fff;
  font-size: 16px;
  text-align: left;
`;

export {RegisterWrap, InputBox, RegisterButton, Loginbutton, TextBox}