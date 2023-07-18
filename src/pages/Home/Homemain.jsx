import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __fetchDataList } from "../../redux/modules/dataListSlice";
import { Penstyle } from "./Style";
import { DataListContainer, ImageContiainer, PostContainer, TextContainer } from "./Container";
import Modal from "./Modal";
import Header from "../../Layout/Header"


function Home() {
  const [isOpen, setIsopen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const dataList = useSelector((state) => state.dataListSlice.list);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePostClick = (id) => {
    setIsopen(true);
    setSelectedPost(id)
  };
  useEffect(() => {
    dispatch(__fetchDataList())
      .unwrap()
      .catch((error) => console.log("Error fetching data:", error));
  }, [dispatch]);

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
        <DataListContainer>
          {dataList.map((item) => {
            return (
              <PostContainer
                key={item.id}
                onClick={() => handlePostClick(item.id)}
              >
                <ImageContiainer>
                  <img
                    alt="img"
                    key={item.id}
                    src={item.postImg}
                    style={{ width: "280px", height: "500px" }}
                  />
                </ImageContiainer>
                <TextContainer>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </TextContainer>
              </PostContainer>
            );
          })}
          <Modal
            handlePostClick={handlePostClick}
            isOpen={isOpen}
            setIsopen={setIsopen}
            selectedPost={selectedPost}
            dataList={dataList}
          />
        </DataListContainer>
      </div>
    </>
  );
}

export default Home;
