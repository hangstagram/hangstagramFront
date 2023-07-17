import { useState } from "react";

function UseStateHook (){
    const [content, setContent] = useState("");
    const [postImg, setpostImg] = useState(null)
    const [editorHeight, setEditorHeight] = useState(() => {
        return window.innerHeight - 200; // Initial height calculation, adjust as needed
      });

      return {
        content, 
        setContent,
        editorHeight,
        setEditorHeight,
        postImg,
        setpostImg
      }

}


export default UseStateHook