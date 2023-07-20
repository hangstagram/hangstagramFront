import api from "../../Api/api"
const UplaodButtonHandler = async (
  navigate,
  content,
  postImg,
  setpostImg,
  setContent
) => {

  const formData = new FormData()
  formData.append('image', postImg)
  let veriables = {
    "content" : content
  }
  formData.append("requestDto", new Blob([JSON.stringify(veriables)], {type: "application/json"}))
  
  try {
    const response = await api.post(
      "/post",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `${localStorage.getItem("Authorization")}`,
        },withCredentials:true
      }
    );

    if (response.status === 200) {
      console.log("Post request sent successfully!");
      setContent("");
      if (postImg) {
        setpostImg("");
      }
    } else {
      console.error("Error sending post request.");
    }
  } catch (error) {
    console.error("Error sending post request:", error);
  }

  setContent("");
  if (postImg) {
    setpostImg("");
  }

  navigate("/");
};

export default UplaodButtonHandler;
