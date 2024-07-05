import React from "react";
import HeroSectionUnAuthenticated from "../components/HeroSectionHomePage";


function NewHomeScreen(){
    return(
        <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{ alignContent: 'center', display: "flex", width: "100vw", height: "80vh",justifyContent: "center"}}>
                <HeroSectionUnAuthenticated/>
            </div>
        </div>
    )
}

export default NewHomeScreen