import { styled } from "styled-components";

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

export {InputBox, RegisterButton, Loginbutton, TextBox}