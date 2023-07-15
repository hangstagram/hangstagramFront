import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadDataList } from "../redux/modules/dataListSlice";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Header from "../Layout/Header";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const onChangeContent = (value) => setContent(value);
  const onChangeImage = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const uploadButtonHandler = async () => {
    dispatch(
      uploadDataList({
        content,
        selectedImage,
      })
    );

    try {
      const response = await axios.post("http://3.34.144.155:8080/api/post", {
        content,
      });

      if (response.status === 200) {
        console.log("Post request sent successfully!");
        setContent("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        console.error("Error sending post request.");
      }
    } catch (error) {
      console.error("Error sending post request:", error);
    }

    setContent("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    navigate("/");
  };


  return (
    <>
      <Header />
      <UploadLayout>
        <UploadContainer>
          <ImageStyled
            ref={fileInputRef}
            type="file"
            onChange={onChangeImage}
          />
            <ReactQuill
              theme="snow"
              name="content"
              value={content}
              placeholder="내용"
              onChange={onChangeContent}
              style={{
                width: "100%",
                minHeight: "260px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "0px",
                marginTop: "50px",
              }}
            >
              <UploadButton onClick={uploadButtonHandler}>업로드</UploadButton>
            </div>
         
        </UploadContainer>
      </UploadLayout>
      {content}
    </>
  );
}

export default Upload;



const UploadLayout = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

const UploadContainer = styled.div`
 border: 2px solid black;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  margin: 0 auto;
  margin-top: 15px;
`;

// const InputStyled = styled.input`
//   background-color: green;
//   width: 90%;
//   height: 295px;
// `;

const UploadButton = styled.button`
  background-color: black;
  width: 80px;
  height: 40px;
  border-radius: 12px;
  color: white;
`;

const ImageStyled = styled.input`
  background-color: pink;
  width: 100%;
  height: 30px;
`;
