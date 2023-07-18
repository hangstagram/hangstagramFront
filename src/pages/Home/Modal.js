import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  DateContiner,
  ImageContiainer,
  ModalContiner,
  ModalHeader,
  ModalOveray,
  ModalTextContiner,
  ModalWrap,
} from "./Container";
import { DeleteButton } from "./Style";
import { ModalClose } from "./Style";
import axios from "axios";

const Modal = ({ isOpen, setIsopen, selectedPost, dataList }) => {
  const selected = dataList.find((item) => item.id === selectedPost);

  const DeleteHandler = async (id) => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://3.34.144.155:8080/api/post/${id}`);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      return;
    }
    window.location.reload()
  };

  return (
    <div>
      {isOpen && (
        <div>
          <ModalOveray onClick={() => setIsopen(false)} />
          <ModalContiner>
            <ModalHeader>
              <DateContiner>
                {/* 작성일 : {selected.createdAt.slice(2, 10)} */}
              </DateContiner>
              <ModalClose onClick={() => setIsopen(false)}>X</ModalClose>
            </ModalHeader>
            <ModalWrap>
              <ImageContiainer>
                <img
                  alt="img"
                  key={selected.id}
                  src={selected.postImg}
                  style={{ width: "280px", height: "500px" }}
                />
              </ImageContiainer>
              <ModalTextContiner>
                <div dangerouslySetInnerHTML={{ __html: selected.content }} />
              </ModalTextContiner>
            </ModalWrap>
            <div>
              <DeleteButton onClick={() => DeleteHandler(selectedPost)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </DeleteButton>
            </div>
          </ModalContiner>
        </div>
      )}
    </div>
  );
};

export default Modal;
