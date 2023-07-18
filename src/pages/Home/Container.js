import { styled } from "styled-components";

const ImageContiainer = styled.div`
  height: 350px;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  h1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 0;
  }
  h2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 0;
  }
`;

const ModalContiner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 500px;
  margin: 20px;
  padding: 6px 0 0 0px;
  box-shadow: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;
const ModalOveray = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalWrap = styled.div`
  display: flex;
  padding: 0 0 20px 35px;
`;

const ModalTextContiner = styled.div`
  width: 280px;
  height: 330px;
  margin: 0 0 0 30px;
  padding: 0 0 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  flex-direction: column;
`;

const DateContiner = styled.div`
  padding: 0 0 10px 20px;
  margin-bottom: 5px;
`;

const PostContainer = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  flex-direction: column;
  cursor: pointer;
`;

export {ImageContiainer, TextContainer, ModalContiner, ModalOveray, ModalHeader, ModalWrap, ModalTextContiner, DateContiner, PostContainer}