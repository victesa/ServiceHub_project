import React from "react";

const textFieldStyles = {
    width: "200px", 
    height: "25px",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "14px"
}

const textFieldErrorStyles = {
    width: "200px", 
    height: "25px",
    padding: "10px",
    border: "1px solid red",
    borderRadius: "14px"
}

function AccountBalanceScreen({error, onChange, errorMessage}){
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <form style={{flex:1, alignItems: "start", justifyContent: "start", display: 'flex', flexDirection: "column"}}>
                <p style={{fontSize: "24px", fontWeight: "bold"}}>Withdraw</p>
                <label htmlFor="phoneNumber" style={{textAlign: "left"}}>Phone Number</label><br/>
                <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    style={error? textFieldErrorStyles: textFieldStyles}
                    placeholder="phoneNumber"
                    onChange={onChange}

                    required
                /><br/>

                {error && <p style={{color: "red", margin: '5px 0 0 0'}}>{errorMessage}</p>}

                <label htmlFor="password" style={{textAlign: "left"}}>Password</label><br/>
                <input
                    type="password"
                    id="password"
                    name="password"
                    style={error? textFieldErrorStyles: textFieldStyles}
                    placeholder="password"
                    onChange={onChange}

                    required
                /><br/>

                <input type="submit" style={{padding: "10px", width: "150px", backgroundColor: "green", color: "white", border: "1px solid green", borderRadius: "14px"}} placeholder="Withdraw"/>

            </form>
        </div>
    )
}

export default AccountBalanceScreen;