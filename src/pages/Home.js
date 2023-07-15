import React, { startTransition, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { deleteDataList } from "../redux/modules/dataListSlice";
function Home() {
  const [dataList, setDataList] = useState([]);
  const dispatch = useDispatch();

  const fetchDataList = async () => {
    const { data } = await axios.get("https://reqres.in/api/users?page=2");
    setDataList(data.data);
  };

  // const fetchDataList = async () => {
  //   const { data } = await axios.get("http://3.34.144.155:8080/api/post", {
  //     withCredentials: true,
  //   });
  //   console.log(data.data);
  // };

  const onDeleteButtonHandler = (id) => {
    dispatch(deleteDataList(id));
  };

  useEffect(() => {
    fetchDataList();
  }, []);
  return (
    <Container>
      <Header />
      <Layout>
        {dataList.map((item) => {
          return (
            <div>
              <Images key={item.id}>{item.avatar}</Images>
              <Texts>{item.email}</Texts>
              <button onClick={() => onDeleteButtonHandler(item.id)}>
                삭제
              </button>
            </div>
          );
        })}
      </Layout>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  width: 500px;
  padding: 20px 20px 80px;
  border-radius: 10px;
  background-color: #aecdff;
  max-height: 300px;
`;

const Header = styled.div`
  width: 500px;
  height: 30px;
  border-radius: 10px;
  padding: 1rem;
  color: white;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Images = styled.div`
  background-color: #288cd2;
  width: 400px;
  height: 130px;
  padding: 20px 20px 80px;
  border-radius: 10px;
  color: #ffffff;
  margin: 0 0 15px 30px;
`;

const Texts = styled.div`
  background-color: #288cd2;
  width: 400px;
  padding: 20px 20px 80px;
  border-radius: 10px;
  color: #ffffff;
  margin: 0 0 15px 30px;
`;
