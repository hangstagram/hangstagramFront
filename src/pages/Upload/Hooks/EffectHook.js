import { useEffect } from "react";

function useCutomEffect( editorHeight, setEditorHeight) {

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
  }, );
}

export default useCutomEffect;
