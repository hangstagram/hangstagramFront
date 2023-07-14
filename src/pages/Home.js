import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [dataList, setDataList] = useState([])

  const fetchdataList = async () => {
    const { data } = await axios.get("https://reqres.in/api/users/")
    console.log(data)
  };

  const onDeleteHandler = () => {}

  useEffect(() => {
    fetchdataList();
  },[]);
  return (
    <div>
      {/* {dataList.map((item) => {
        return (
          <div key={item.id}>
            {item.content}
            <button onClick={()=> onDeleteHandler(item.id)}></button>
          </div>
        );
      })} */}
    </div>
  );
}

export default Home;
