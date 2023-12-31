
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { PreviewContainer, UploadContainer, UploadLayout } from "./container";
import { CustomQuillStyles, ImageStyled, UploadButton } from "./styled";
import UplaodButtonHandler from "./UplaodButtonHandler";
import useCustomEffect from "./Hooks/EffectHook"

function Input() {
  const [content, setContent] = useState("");
  const [postImg, setpostImg] = useState(null);
  const [editorHeight, setEditorHeight] = useState(() => {
    return window.innerHeight - 200; // Initial height calculation, adjust as needed
  });

  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  useCustomEffect(editorHeight, setEditorHeight)

  const onChangeContent = (value) => setContent(value);
  const onChangepostImg = (e) => setpostImg(e.target.files[0]);

  return (
    <>
      <CustomQuillStyles>
        <UploadLayout>
          <div style={{ width: "50%" }}>
            <UploadContainer>
              <ImageStyled
                ref={fileInputRef}
                type="file"
                onChange={onChangepostImg}
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
              <UploadButton
                onClick={() =>
                  UplaodButtonHandler(
                    navigate,
                    content,
                    postImg,
                    setpostImg,
                    setContent
                  )
                }
              >
                업로드
              </UploadButton>
            </div>
          </div>
          <PreviewContainer>
            <div>
              <h1>preview</h1>
            </div>
            <div style={{ lineHeight: "0.4" }}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </PreviewContainer>
        </UploadLayout>
      </CustomQuillStyles>
    </>
  );
}

export default Input;
