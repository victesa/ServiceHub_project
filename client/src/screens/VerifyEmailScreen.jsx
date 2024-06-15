import React, { useState, useEffect } from "react";
import { BasicHeaderServiceHub } from "../components/Header";
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function VerifyEmailScreen() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [message, setMessage] = useState('Please check your email for the verification link.');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setMessage("Please check your email for the verification link.");
      fetch(`http://localhost:5000/auth/verify-email?token=${token}`, {
        method: 'GET',
        credentials: 'include', // Include credentials in request
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            setMessage(data.error);
            console.log(data.error); // Logging the error message
          } else {
            setMessage('Email verified successfully! Redirecting to home...');
            setTimeout(() => {
              navigate('/HomeAuthenticatedScreen'); // Redirect to home screen after 3 seconds
            }, 3000);
          }
        })
        .catch(error => {
          setMessage('An error occurred. Please try again.');
          console.error('Error:', error);
        });
    }
  }, [token, navigate]);

  return (
    <div>
      <BasicHeaderServiceHub />
      <div style={{ width: "100%", height: "90%", overflow: "hidden" }}>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default VerifyEmailScreen;
