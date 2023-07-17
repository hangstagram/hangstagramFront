import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { useNavigate } from "react-router-dom";

function Header({ icon }) {
  const navigate = useNavigate(); 

  return (
    <HeaderStyle>
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon
          icon={faShip}
          onClick={() => navigate("/")}
          style={ShipStyle}
        />
        <h2 onClick={() => navigate("/")}
        style={{
             marginLeft: "30px",
             cursor:'pointer'
     }}
     >hangStargram99</h2>
      </div>
      <FontAwesomeIcon
        icon={icon}
        onClick={() => navigate("/upload")}
        style={PenStyle}
      />
    </HeaderStyle>
  )
}

export default Header

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
