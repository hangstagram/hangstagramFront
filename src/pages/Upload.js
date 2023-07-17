import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadDataList } from "../redux/modules/dataListSlice";
import styled from "styled-components";
import ReactQuill, { contextType } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Header from "../Layout/Header";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [content, setContent] = useState("");
  const [postImg, setpostImg] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const editorHeight = windowHeight - 200; // Adjust the value based on your layout
      setEditorHeight(editorHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [editorHeight, setEditorHeight] = useState(() => {
    return window.innerHeight - 200; // Initial height calculation, adjust as needed
  });

  const onChangeContent = (value) => setContent(value);
  const onChangeImage = (e) => {
    setpostImg(e.target.files[0]);
  };

  const uploadButtonHandler = async () => {
    const formData = new FormData()
    formData.append('image', fileInputRef.current.files[0])
    let veriables = {
      "content" : content
    }
    formData.append("requestDto", new Blob([JSON.stringify(veriables)], {type: "application/json"}))
    

    try {
      // dispatch(
      //   uploadDataList({
      //     content,
      //     postImg,
      //   })
      // );

      const response = await axios.post("http://3.34.144.155:8080/api/post",formData, {
       headers:{
        "Content-Type": 'multipart/form-data'
       }
      });

      //  --  test code for only image  --//
      // const response = await axios.post("http://3.34.144.155:8080/api/post/test",formData)
      // console.log("response", response)
      // -------------- // 
      
      if (response.status === 200) {
        console.log("Post request sent successfully!");
        setContent("");
        setpostImg(null);
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
    setpostImg(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  
    navigate("/");
  };
  
  return (
    <>
      <CustomQuillStyles>
        <Header />
        <UploadLayout>
          <div style={{width: '50%'}}>
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
                placeholder="당신이 이야기를 적어보세요.."
                onChange={onChangeContent}
                className="custom-quill"
                style={{
                  height: `${editorHeight}px`,
                  width: "100%",
                }}
              />
            </UploadContainer>
            <div className="button-container">
              <UploadButton onClick={uploadButtonHandler}>업로드</UploadButton>
            </div>
          </div>
          <div
            style={{
              width: "50%",
              backgroundColor: "black",
              color: "white",
              padding: "12px",
              paddingTop: "10px",
            }}
          >
            <div>
              <h1>preview</h1>
            </div>
            <div style={{lineHeight:"0.4"}}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
           
            </div>
          </div>
        </UploadLayout>
      </CustomQuillStyles>
    </>
  );
}

export default Upload;

const UploadLayout = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;

  .button-container {
    background-color: rgb(47,47,47);
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


