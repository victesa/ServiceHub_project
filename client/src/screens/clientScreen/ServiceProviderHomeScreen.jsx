import React, { useEffect, useState } from "react";
import { SellerHomeScreenHeader } from "../../components/Header";
import LeftNavigationBar from "../../components/sellerComponents/SellerNavigationBar";
import PortfolioScreen from "./PortfolioScreen";
import EmptyRequest from "../../components/sellerComponents/RequestBox";
import FinanceScreen from "./FinanceScreen";
import ProfileSetUpSection from "../../components/sellerComponents/ProfileSetupSection";

function ServiceProviderHomeScreen() {
    const [selectedScreen, setSelectedScreen] = useState("Portfolio");
    const [listOfServices, setListOfServices] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/clientHomeScreen', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId }),
                    credentials: 'include', // Include credentials in request
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }

                const data = await response.json();
                setListOfServices(data.services);
                setUserDetails(data.userDetails);
            } catch (error) {
                console.error("Error fetching home details:", error);
            }
        };

        fetchData();
    }, [userId]);

    const navToScreen = (screen) => {
        setSelectedScreen(screen);
    };

    let screenComponent;

    if (selectedScreen === "Portfolio") {
        screenComponent = <PortfolioScreen listOfServices={listOfServices} />;
    } else if (selectedScreen === "Requests") {
        screenComponent = <EmptyRequest/>;
    } else {
        screenComponent = <FinanceScreen />;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <SellerHomeScreenHeader image = {userDetails.profilePic}/>
            <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <LeftNavigationBar selectedScreen={selectedScreen} onSelectScreen={navToScreen} />
                <div style={{ overflow: "auto", flex: 1 }}>
                    {screenComponent}
                </div>
            </div>
        </div>
    );
}

export default ServiceProviderHomeScreen;
