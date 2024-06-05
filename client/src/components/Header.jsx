import React from "react";
import { logoStyle} from "./componentsStyles";
import "../styles.css"


function BasicHeaderServiceHub() {
  return (
    <div className="header">
      <p style={logoStyle}>
        <b>ServiceHub</b>
      </p>
    </div>
  );
}

export default BasicHeaderServiceHub;
