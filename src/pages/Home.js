import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  const [dataList, setDataList] = useState([]);

  const onDeleteHandler = () => {};

  useEffect(() => {
    const fetchDataList = async () => {
   const data= await axios
        .get("http://3.34.144.155:8080/api/post")
        .then((response) => {
          console.log(response.data)
         return response.data
        })
        .catch((error) => console.log(error));
        setDataList(data)
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
