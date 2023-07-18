import React from "react";
import {
  DateContiner,
  ImageContiainer,
  ModalContiner,
  ModalHeader,
  ModalOveray,
  ModalTextContiner,
  ModalWrap,
} from "./Container";
import { ModalClose } from "./Style";

const Modal = ({isOpen, setIsopen, selectedPost, dataList}) => {

  const selected = dataList.find((item) => item.id === selectedPost);

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
          </ModalContiner>
        </div>
      )}
    </div>
  );
};

export default Modal;
