import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Penstyle } from "../components/Home/Style";
import Header from "../Layout/Header";
import Mapdata from "../components/Home/Mapdata";

function Homemain() {

  const navigate = useNavigate()

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
       <Mapdata/>
      </div>
    </>
  );
}

export default Homemain;
