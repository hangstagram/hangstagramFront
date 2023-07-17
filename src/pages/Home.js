import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import { useSelector } from "react-redux";
function Home() {

  const data = useSelector((state)=>{
    return state.dataListSlice
  })



  const [dataList, setDataList] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const navigate = useNavigate();
  const handlePostClick = (id) => {
    setIsopen(true);
    setSelectedPost(id);
  };

  const selected = dataList.find((item) => item.id === selectedPost);

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
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://3.34.144.155:8080/api/post/${id}`);
        setDataList((prevDataList) =>
          prevDataList.filter((item) => item.id !== id)
        );
      } catch (error) {
        console.log("error", error);
      }
    } else {
      return null
    }
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Header icon={faFilePen}>
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
              <Posts key={item.id} onClick={() => handlePostClick(item.id)}>
                <Images>
                  <img
                    alt="img"
                    key={item.id}
                    src={item.postImg
                    }
                    style={{ width: "280px", height: "500px" }}
                  />
                </Images>
                <div>
                  <DeleteButton onClick={() => onDeleteHandler(item.id)}><FontAwesomeIcon icon={faTrashCan} /></DeleteButton>
                </div>
                <Texts>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </Texts>
              </Posts>
            );
          })}
          {isOpen && (
            <div>
              <OVERLAY onClick={() => setIsopen(false)} />
              <ModalStyle>
                <ModalHeader>
                  <DateStyle>
                    작성일 : {selected.createdAt.slice(2, 10)}
                  </DateStyle>
                  <ModalClose onClick={() => setIsopen(false)}>X</ModalClose>
                </ModalHeader>
                <ModalWrap>
                  <Images>
                    <img
                      alt="img"
                      key={selected.id}
                      src={
                        "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
                      }
                      style={{ width: "280px", height: "500px" }}
                    />
                  </Images>
                  <ModalText>
                    <div
                      dangerouslySetInnerHTML={{ __html: selected.content }}
                    />
                  </ModalText>
                </ModalWrap>
              </ModalStyle>
            </div>
          )}
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
  height: 350px;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  border-radius: 10px;
`;

export const Texts = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  h1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 0;
  }
  h2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 0;
  }
`;

const Penstyle = {
  width: "40px",
  height: "50px",
  cursor: "pointer",
  marginTop: "8px",
};

const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 500px;
  margin: 20px;
  padding: 6px 0 0 0px;
  box-shadow: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;
const OVERLAY = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalWrap = styled.div`
  display: flex;
  padding: 0 0 20px 35px;
`;

const ModalClose = styled.button`
  border: none;
  background-color: white;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const ModalText = styled.div`
  width: 280px;
  height: 330px;
  margin: 0 0 0 30px;
  padding: 0 0 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  flex-direction: column;
`;

const DateStyle = styled.div`
  padding: 0 0 10px 20px;
  margin-bottom: 5px;
`;

const DeleteButton = styled.button`
  margin-left: auto;
`
