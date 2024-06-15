import React from "react";
import { BasicHeaderServiceHub } from "../components/Header";


function HomeAuthenticatedScreen(){
    return(
        <div style={{width: "100%", height: "100%"}}>
            <BasicHeaderServiceHub/>

            <h1>Welcome</h1>
        </div>
    )
}

export default HomeAuthenticatedScreen