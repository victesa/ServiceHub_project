import React from "react";
import testImage from "../../images/testLandscape.png"

function ServiceCard(){
    return(
        <div style={{width: "200px", height: "250px", display: "flex", flexDirection: "column", marginLeft: "100px", marginTop: "100px", backgroundColor: "white"}}>
            <div style={{width: "100%", height: "40%"}}>
                <img src={testImage} style={{minWidth: "100%", minHeight: "100%", maxHeight: "100%", maxWidth: "100%"}}/>
            </div>

            <div style={{width: "100%", height: "60%", padding: "10px 0 0 0"}}>
                <div style={{display: "flex", alignItems: "center", height: "20%"}}>
                    <img src = {testImage} style={{borderRadius: "50%", width: "30px", height: "30px", marginRight: "10px"}}/>

                    <p>Patrick</p>
                </div>

                <div style={{width: "100%", height: "50%"}}>
                    <p style={{textAlign: "left"}}>I will make stunning ai art, character, scene, logo, anything</p>
                </div>

                <div style={{width: "100%", height: "20%"}}>
                    <p style={{fontWeight: "bold", textAlign: "left"}}>From 250$</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard