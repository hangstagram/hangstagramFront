import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

function Home() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchDataList = async () => {
      await axios
        .get("https://reqres.in/api/users?page=2")
        .then((response) => {
          setDataList(response.data.data)
          // console.log(response.data.data)
        })
        .catch((error) => console.log("error", error));
    };
    
    fetchDataList();
  }, []);

  return (
    <Container>
      <Header />
      <Layout>
        {dataList.map((item) => {
          return (
            <div dangerouslySetInnerHTML={{}} key={item.id}>
              <Texts>{item.first_name}</Texts>
              <Images><img src={item.avatar}/></Images>  
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
