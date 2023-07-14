import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadDataList } from "../redux/modules/dataListSlice";

function Upload() {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();
  const fileInputRef = useRef(null)
  
  const onChangeContent = (e) => setContent(e.target.value);
  const onChangeImage = (e) => { setSelectedImage(e.target.files[0])
  };

  const uploadButtonHandler = () => {
    dispatch(uploadDataList({
      content,
      selectedImage
    }));
    setContent('')

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  

  
  return (
    <>
      <div>
        <input
          name="content"
          value={content}
          placeholder="내용"
          onChange={onChangeContent}
        />
        <input 
        ref={fileInputRef}
        type="file" 
        onChange={onChangeImage}/>
        <button onClick={uploadButtonHandler}> 업로드</button>
      </div>
      {content}
    </>
  )
}

export default Upload;


