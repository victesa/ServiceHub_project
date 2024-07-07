import React from "react";
import image from "../images/heroPic_1.png"
import { BasicHeaderServiceHub } from "../components/Header";
import { useNavigate } from "react-router-dom";

function InvoiceCard(){
    return(
        <div style={{display: "flex", 
        flexDirection: "column", 
        border: "1px solid black",
        borderRadius: "15px", 
        width: "80%", 
        padding: "20px",
        justifyContent: "left",
        flexWrap: "unset"}}>
            <p style={{fontSize: "25px", margin: 0}}>Invoice</p>

            <form style={{display: "flex", flexDirection: "column", marginTop: 20, alignItems: "left"}}>
                <label htmlFor="" style={{textAlign: "left"}}>Amount</label><br/>
                <input type="number" placeholder="0" style={{width: "40%", height: "25px", borderRadius: "10px", border: "1px solid gray", padding: "10px"}}/>

                <label htmlFor="" style={{textAlign: "left", marginTop: "40px"}}>Additional Message</label><br/>
              

                <textarea  placeholder="Additional Message" style={{maxWidth: "100%", height: "200px", borderRadius: "10px", border: "1px solid gray", padding: "10px"}}/>

                <div style={{marginTop: "40px"}}>
                    <button style={{width: "150px", height: "40px", backgroundColor: "red", color: "white", border: "1px solid red", borderRadius: "10px"}}>
                        Reject
                    </button>

                    <button style={{width: "150px", height: "40px", backgroundColor: "green", color: "white", border: "1px solid green", borderRadius: "10px", marginLeft: "40px"}}>
                        Accept
                    </button>
                </div>
            </form>
        </div>
    )
}

function ProfileInfo({profileImage}){
    return(
        <div style={{display: "flex"}}>
            <img
                src={image}
                alt="Profile"
                style={{
                width: "100px",
                height: "100px",
                backgroundColor: "lightGray",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px",
                }}
            />

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <p style={{textAlign: "left", fontWeight: "bold", margin: 0}}>Abdi Mohammed</p>
                <p style={{textAlign: "left", margin: 0, marginTop: 20}}>5.0 *</p>
            </div>
        </div>
    )
}

function Description(){
    return(
        <div style={{backgroundColor: "lightGray", border: "1px solid lightGray", borderRadius: "15px", overflow: "hidden", marginTop: "40px", flex: 1, padding : "20px", width: "80%"}}>
            <p style={{textAlign: "left", margin: 0, fontSize: "20px", fontWeight: "bold", marginTop: "20px"}}>Description</p>
            <p></p>
        </div>
    )
}

function Header(){
    const navigate = useNavigate();

    const navigateToHome = ()=>{
        navigate('/')
    }
     return (
        <div style={{position: "fixed", top: 0, left: 0, width: "100vw", borderBottom: "1px solid gray", backgroundColor: "white"}}>
            <p style={logoStyle} onClick={navigateToHome}>
            <b>ServiceHub</b>
        </p>
        </div>
    );
}

const logoStyle = {
    textAlign: "start",
    color: "green",
    fontSize: "20px",
    padding: "0px 0px 0px 10px",
    cursor: "pointer",
    maxWidth: "100%"
};

function ViewRequestScreen(){
    return(
        <div style={{ width: "100vw", height: "calc( 100vh - 65px)", display: "flex", flexDirection: "column"}}>
            <Header/>

            <div style={{display: "flex", maxWidth: "100%", flex: 1, marginTop: "64px", padding: "50px"}}>
                <div style={{display: "flex", flexDirection: "column", width: "60%"}}>
                    <ProfileInfo/>

                    <Description/>
                </div>

                <div style={{flex: 1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <InvoiceCard/>
                </div>
            </div>
        </div>
    )
}


export default ViewRequestScreen;