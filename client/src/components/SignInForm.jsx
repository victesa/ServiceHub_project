import React, { useState } from "react";
import OptionalDiv, { PasswordTextFieldInput, EmailTextFieldInput, SignInButton, CreateAccountWhiteBg } from "./SignInComponents";

const mainDivStyle = {
  width: "500px",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
  border: "1px solid gray",
  borderRadius: "20px",
};

function SignInForm() {
  const [emailAddress, setEmailAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const signIn = async (event) => {
    event.preventDefault();

    const signInJson = {
      emailAddress,
      userPassword
    };

    console.log(signInJson);

    try {
      const response = await fetch("http://localhost:5000/auth/signIn", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInJson)
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        console.log(errorMessage);

        if (errorMessage.type === "email") {
          setEmailErrorMessage(errorMessage.msg);
          setEmailHasError(true);
          setPasswordHasError(false);
        } else {
          setPasswordErrorMessage(errorMessage.msg);
          setPasswordHasError(true);
          setEmailHasError(false);
        }
      } else {
        setEmailHasError(false);
        setPasswordHasError(false);
      }
    } catch (error) {
      console.log(error);
      setEmailHasError(false);
      setPasswordHasError(false);
    }
  };

  return (
    <form style={mainDivStyle} onSubmit={signIn}>
      <p style={{ fontSize: "25px" }}>
        <b>Sign In to ServiceHub</b>
      </p>

      <EmailTextFieldInput 
        error={emailHasError} 
        onChange={(e) => setEmailAddress(e.target.value)} 
        errorMessage={emailErrorMessage} 
      />

      <PasswordTextFieldInput 
        error={passwordHasError} 
        onChange={(e) => setUserPassword(e.target.value)} 
        errorMessage={passwordErrorMessage} 
      />

      <div
        style={{
          width: "410px",
          display: "flex",
          justifyContent: "flex-end",
          padding: "0px 0px 5px 0px",
        }}
      >
        <a href="" style={{ color: "green" }}>Forgot Password</a>
      </div>

      <span style={{ padding: "30px" }}></span>

      <SignInButton />

      <OptionalDiv />

      <span style={{ padding: "30px" }}></span>

      <CreateAccountWhiteBg />

      <span style={{ padding: "30px" }}></span>
    </form>
  );
}

export default SignInForm;
