import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ icon }) {
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.removeItem("Authorization")
    navigate("/login");
  };

  const isLoggedIn = localStorage.getItem("Authorization") !== null;

  const handleUploadClick = ()=>{
    if (isLoggedIn){
      navigate("/upload");
    } else {
      alert("로그인 하고 이용해주세요")
      navigate("/login")
    }
  }

  return (
    <HeaderStyle>
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon
          icon={faShip}
          onClick={() => navigate("/")}
          style={ShipStyle}
        />
        <h2
          onClick={() => navigate("/")}
          style={{
            marginLeft: "30px",
            cursor: "pointer",
          }}
        >
          hangStargram99
        </h2>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <FontAwesomeIcon
          icon={icon}
          onClick={handleUploadClick}
          style={PenStyle}
        />
        {isLoggedIn ? (
          <h3 style={{ cursor: "pointer" }} onClick={handelLogout}>
            로그아웃
          </h3>
        ) : (
          <h3
            style={{ cursor: "pointer" }}
            onClick={()=> navigate("/login")}
          >
            로그인
          </h3>
        )}
      </div>
    </HeaderStyle>
  );
}

export default Header;

const ShipStyle = {
  zIndex: "1",
  width: "40px",
  height: "50px",
  cursor: "pointer",
  marginTop: "8px",
  marginLeft: "15px",
};

const PenStyle = {
  width: "40px",
  height: "50px",
  cursor: "pointer",
  marginTop: "8px",
};

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
