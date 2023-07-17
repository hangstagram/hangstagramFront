import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
function Home() {
  const [dataList, setDataList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataList = async () => {
      await axios
        .get("http://3.34.144.155:8080/api/post")
        .then((response) => {
          // console.log(response)
          setDataList(response.data);
        })
        .catch((error) => console.log("error", error));
    };

    fetchDataList();
  }, []);

  const onDeleteHandler = async (id) => {
    try {
      await axios.delete(`http://3.34.144.155:8080/api/post/${id}`);
      setDataList((prevDataList) =>
        prevDataList.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.log("error", error);
    }
  };


  return (
    <>
      <div style={{ width: "100%" }}>
        <Header icon={faFilePen} >
          <FontAwesomeIcon
            icon={faFilePen}
            onClick={()=> navigate("/upload")}
            style={Penstyle}
          />
        </Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {dataList.map((item) => {
            return (
              <Posts key={item.id}>
                <Images>
                  <img
                    alt="img"
                    key={item.id}
                    src={
                      "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
                    }
                    style={{ width: "280px", height: "500px" }}
                  />
                </Images>

                <div>
                  <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
                </div>
                <Texts>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </Texts>
              </Posts>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;

export const Posts = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  flex-direction: column;
  cursor: pointer;
`;

export const Images = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  margin-left: 10px;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
`;

export const Texts = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Penstyle = {
  width: "40px",
  height: "50px",
  cursor: "pointer",
  marginTop: "8px",
};

// const DetailButton = styled.button`
//   margin-left: 200px;
// `;

