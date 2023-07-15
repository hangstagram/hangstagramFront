import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faShip } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Header } from "../Layout/Header";
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
  }, [dataList]);

  const onDeleteHandler = async (id) => {
    axios.delete(`http://3.34.144.155:8080/api/post/${id}`)
    setDataList(
      dataList.filter((item)=>{
        return item.id !== id
      })
    )
  }


  return (
    <>
      <div style={{ width: "100%" }}>
        <Header>
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              icon={faShip}
              onClick={() => navigate("/")}
              style={ShipStyle}
            />
            <h2 style={{ marginLeft: "30px" }}>hangStargram99</h2>
          </div>
          <FontAwesomeIcon
            icon={faFilePen}
            onClick={() => navigate("/upload")}
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
                <button onClick={()=>onDeleteHandler(item.id)}>삭제</button>
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

const Posts = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  flex-direction: column;
`;

const Images = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  margin-left: 10px;
  align-items: center;
  overflow: hidden;
`;

const Texts = styled.div`
  width: 100%;
  overflow: hidden;
  color: black;
`;

const ShipStyle = {
  zIndex: "1",
  width: "40px",
  height: "50px",
  cursor: "pointer",
  marginTop: "8px",
  marginLeft: "15px",
};

const Penstyle = {
  width: "40px",
  height: "50px",
  cursor: "pointer",
  marginTop: "8px",
};
