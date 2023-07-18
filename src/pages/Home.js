import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import { DateContiner, ImageContiainer, ModalContiner, ModalHeader, ModalOveray, ModalTextContiner, ModalWrap, PostContainer, TextContainer } from "./Home/Container";
import { DeleteButton, ModalClose, Penstyle } from "./Home/Style";
import { useDispatch, useSelector } from "react-redux";
import { __fetchDataList, deleteDataList } from "../redux/modules/dataListSlice";
function Home() {
  // const [dataList, setDataList] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const dataList = useSelector((state)=> state.dataListSlice.list)

    // console.log("dataList1", dataList)


  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handlePostClick = (id) => {
    setIsopen(true);
    setSelectedPost(id);
  };

  const selected = dataList.find((item) => item.id === selectedPost);

  useEffect(() => {
    dispatch(__fetchDataList())
      .unwrap()
      .catch((error) => console.log('Error fetching data:', error));
  }, [dispatch]);

  const onDeleteHandler = async (id) => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://3.34.144.155:8080/api/post/${id}`);
        dispatch(deleteDataList(id))
          
      } catch (error) {
        console.log("error", error);
      }
    } else {
      return
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
            flexDirection: "column",
            width: "100%",
            flexWrap: "wrap",
            justifyContent:"center",
            alignItems:'center'
          }}
        >
          
            {dataList.map((item) => {
              return (
                <PostContainer key={item.id} onClick={() => handlePostClick(item.id)}>
                  <ImageContiainer>
                    <img
                      alt="img"
                      key={item.id}
                      src={item.postImg}
                      style={{ width: "280px", height: "500px" }}
                    />
                  </ImageContiainer>
                  <div> 
                    <DeleteButton onClick={() => onDeleteHandler(item.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </DeleteButton>
                  </div>
                  <TextContainer>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </TextContainer>
                </PostContainer>
              );
            })} 
      

          {isOpen && (
            <div>
              <ModalOveray onClick={() => setIsopen(false)} />
              <ModalContiner>
                <ModalHeader>
                  <DateContiner>
                    {/* 작성일 : {selected.createdAt.slice(2, 10)} */}
                  </DateContiner>
                  <ModalClose onClick={() => setIsopen(false)}>X</ModalClose>
                </ModalHeader>
                <ModalWrap>
                  <ImageContiainer>
                    <img
                      alt="img"
                      key={selected.id}
                      src={selected.postImg}
                      style={{ width: "280px", height: "500px" }}
                    />
                  </ImageContiainer>
                  <ModalTextContiner>
                    <div
                      dangerouslySetInnerHTML={{ __html: selected.content }}
                    />
                  </ModalTextContiner>
                </ModalWrap>
              </ModalContiner>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;






