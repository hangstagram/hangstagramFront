import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  DataListContainer,
  ImageContiainer,
  PostContainer,
  Postuser,
  TextContainer,
} from "./Container";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { __fetchDataList } from "../../redux/modules/dataListSlice";
import { Userbutton } from "./Style";

function Mapdata() {
  const [isOpen, setIsopen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const dispatch = useDispatch();

  const handlePostClick = (id) => {
    setIsopen(true);
    setSelectedPost(id);
  };
  useEffect(() => {
    dispatch(__fetchDataList())
      .unwrap()
      .catch((error) => console.log("Error fetching data:", error));
  }, [dispatch]);
  const dataList = useSelector((state) => state.dataListSlice.list);

  return (
    <>
      <DataListContainer>
        {dataList.map((item) => {
          return (
            <PostContainer
              key={item.id}
              onClick={() => handlePostClick(item.id)}
            >
              <Postuser>
                <Userbutton> {item.author} </Userbutton>
                <div> {item.createdAt.slice(2, 10)}</div>
              </Postuser>
              <ImageContiainer>
                <img
                  alt="img"
                  key={item.id}
                  src={item.postImg}
                  style={{ width: "390px", height: "100%" }}
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
    </>
  );
}

export default Mapdata;
