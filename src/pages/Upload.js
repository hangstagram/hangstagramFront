import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadDataList } from "../redux/modules/dataListSlice";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function Upload() {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

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

    // window.location.href = "/";
  };

// post 요청

  return (
    <UploadLayout>
      <UploadContainer>
        <ImageStyled ref={fileInputRef} type="file" onChange={onChangeImage} />
        <div style={{ width: "100%" }}>
          <ReactQuill
            theme="snow"
            name="content"
            value={content}
            placeholder="내용"
            onChange={onChangeContent}
            style={{
              width:'100%',
              height:'260px',
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "0px",
              marginTop:'50px',
            }}
          >
            <UploadButton onClick={uploadButtonHandler}>업로드</UploadButton>
          </div>
        </div>
      </UploadContainer>
    {content}
    </UploadLayout>
  );
}

export default Upload;

const UploadLayout = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 12px;
  background-color: blue;
`;

const UploadContainer = styled.div`
  background-color: yellow;
  width: 97%;
  display: flex;
  gap: 6px;
  padding: 12px;
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
  width: 60%;
  height: 300px;
`;
