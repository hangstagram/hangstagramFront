import { styled } from "styled-components";

const UploadLayout = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;

  .button-container {
    background-color: rgb(47, 47, 47);
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    flex-direction: row;
    z-index: 1;
  }
`;

const UploadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  margin: 0 auto;
  background-color: rgb(205, 211, 214);
`;
const PreviewContainer = styled.div`
  width: 50%;
  background-color: black;
  color: white;
  padding: 12px;
  padding-top: 10px;
`;

export { UploadLayout, UploadContainer, PreviewContainer };
