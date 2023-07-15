import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [dataList, setDataList] = useState([]);

  const onDeleteHandler = () => {};

  useEffect(() => {
    const fetchDataList = async () => {
    await axios
        .get("http://3.34.144.155:8080/api/post")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      
    };
    fetchDataList();
  }, []);
  return (
    <div>
      {dataList.map((item) => {
        return (
          <div key={item.id}>
            {item.content}
            <button onClick={() => onDeleteHandler(item.id)}></button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
