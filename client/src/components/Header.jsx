import React from "react";
import { logoStyle } from "./componentsStyles";
import "../styles.css";
import { useNavigate } from "react-router-dom";

function BasicHeaderServiceHub() {
  return (
    <div className="header">
      <p style={logoStyle}>
        <b>ServiceHub</b>
      </p>
    </div>
  );
}

const signUpButtonHeaderStyle = {
  backgroundColor: "green",
  border: "1px solid green",
  borderRadius: "14px",
  color: "white",
  width: "100px",
  height: "40px",
  fontWeight: "500",
  margin: "0px 0px 0px 30px"
};

const rightHeader = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 10px 0px 0px"
};

function HomeScreenHeader() {
  const navigate = useNavigate();

  const onNavigateToSignInScreen = () => {
    navigate("/signInScreen"); // Navigate to signInScreen route
  };

  const onNavigateToSignUpScreen = () => {
    navigate("/RoleOptionScreen"); // Navigate to RoleOptionScreen route
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid gray"
      }}
    >
      <div id="leftHeaderDiv" style={rightHeader}>
        <p style={logoStyle}>
          <b>ServiceHub</b>
        </p>
        <p style={{ fontSize: "14px", fontWeight: "500", padding: "0px 10px 0px 40px" }}>
          Provide Services
        </p>
        <p style={{ fontSize: "14px", fontWeight: "500", padding: "0px 10px 0px 10px" }}>
          Find Services provider
        </p>
        <p style={{ fontSize: "14px", fontWeight: "500", padding: "0px 10px 0px 10px" }}>
          Explore
        </p>
      </div>

      <div id="rightHeaderDiv" style={rightHeader}>
        <p
          style={{ fontSize: "14px", fontWeight: "500", padding: "0px 10px 0px 20px", cursor: "pointer" }}
          onClick={onNavigateToSignInScreen} // Correct usage of onClick handler
        >
          Sign In
        </p>
        <button
          style={signUpButtonHeaderStyle}
          onClick={onNavigateToSignUpScreen} // Correct usage of onClick handler
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default HomeScreenHeader; 
export {BasicHeaderServiceHub};
