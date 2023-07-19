import { styled } from "styled-components";

const Penstyle = {
  width: "40px",
  height: "50px",
  cursor: "pointer",
  marginTop: "8px",
};

const ModalClose = styled.button`
  border: none;
  background-color: white;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  margin-left: auto;
  border: none;
  background-color: #FFF;
  cursor: pointer;
`;

export { Penstyle, ModalClose, DeleteButton };
