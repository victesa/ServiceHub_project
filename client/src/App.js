import React from "react";
import "./styles.css";
import RoleOptionScreen from "./screens/RoleOptionScreen";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signUpScreen" element={<SignUpScreen />} />
          <Route path="/" element={<RoleOptionScreen />} />
          <Route path="/signInScreen" element={<SignInScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
