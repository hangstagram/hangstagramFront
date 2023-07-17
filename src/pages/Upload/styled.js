import { styled } from "styled-components";

const UploadButton = styled.button`
  background-color: #96F2D7;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: black;

 &:hover{
  background-color: #71C9B8;
  box-shadow: 0px 0px 5px rgba(0,0,0, 0.3);
 }
`;

const ImageStyled = styled.input`
  width: 100%;
  height: 30px;
`;

const CustomQuillStyles = styled.div`
  .custom-quill .ql-container {
    border: none !important;
    border-radius: 0 !important;
    height: 93%;
  }
`;


export {UploadButton, ImageStyled, CustomQuillStyles}