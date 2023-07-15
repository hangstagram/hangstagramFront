import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faShip } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
function Home() {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataList = async () => {
      await axios
        .get("http://3.34.144.155:8080/api/post")
        .then((response) => {
          console.log(response)
          // setDataList(response.data)
          // console.log(response.data.data)
        })
        .catch((error) => console.log("error", error));
    };

    fetchDataList();
  }, [dataList]);

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
                      key={item.avatar}
                      src={item.avatar}
                      style={{ width: "280px" }}
                    />
                  </Images>
                  <Texts>{item.email}</Texts>
                </Posts>
              );
            })}
          </div>
        </div>
    </>
  );
}

export default Home;

const Header = styled.div`
  width: 88.4%;
  display: flex;
  justify-content: space-between;
  /* background-color: #aecdff; */
  margin-left: 20px;
  padding: 0px 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

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
  height: 130px;
  padding: 20px 20px 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Texts = styled.div`
  /* background-color: #288cd2; */
  width: 400px;
  padding: 20px 20px 80px;
  overflow: hidden;
  border-radius: 10px;
  color: black;
  font-size: 24px;
  margin: 0 0 15px
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
