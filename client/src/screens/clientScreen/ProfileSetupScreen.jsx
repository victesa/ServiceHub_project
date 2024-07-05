import React, { useState } from "react";
import ProfileSetUpSection from "../../components/sellerComponents/ProfileSetupSection";
import ServiceSetup from "../../components/sellerComponents/ServiceSetup";
import AddServiceCard from "../../components/sellerComponents/AddServiceCard";
import photo from "../../images/clientImage.png";
import { useNavigate } from "react-router-dom";

const selectedScreenStyle = {
  fontSize: "15px",
  fontWeight: "bold",
  textAlign: "left",
  width: "50%",
  cursor: "pointer",
};
const unSelectedScreenStyle = {
  fontSize: "15px",
  fontWeight: "bold",
  textAlign: "left",
  width: "50%",
  color: "gray",
  cursor: "pointer",
};

function LeftNavigation({ currentScreen, changeCurrentScreen }) {
  return (
    <div
      style={{
        width: "23%",
        minHeight: "100%",
        borderRight: "1px solid gray",
        padding: "20px",
        paddingTop: "40px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={currentScreen === "Profile" ? selectedScreenStyle : unSelectedScreenStyle}
        onClick={() => changeCurrentScreen("Profile")}
      >
        Profile
      </p>
      <p
        style={currentScreen === "Services Setup" ? selectedScreenStyle : unSelectedScreenStyle}
        onClick={() => changeCurrentScreen("Services Setup")}
      >
        Services Setup
      </p>
    </div>
  );
}

function ProfileSetUpScreen() {
  const [currentScreen, setCurrentScreen] = useState("Profile");
  const [serviceList, setServiceList] = useState([]);
  const [addServiceScreenVisible, setAddServiceScreenVisible] = useState(false);

  const [profileImage, setProfileImage] = useState(photo); // Default profile image
  const [aboutService, setAboutService] = useState("");

  const navigate = useNavigate();

  const handleChangeScreen = (screen) => {
    setCurrentScreen(screen);
  };

  const addService = (service) => {
    const newService = {
      id: serviceList.length + 1,
      name: service.serviceName,
      price: service.price,
      aboutService: service.aboutService,
      image: service.image, // Assuming service.image is the file object for service image
    };
    setServiceList([...serviceList, newService]);
    setAddServiceScreenVisible(false); // Hide the add service screen after adding
  };

  const submitProfileDetails = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("profileImage", profileImage); // Append profile image file object
    formData.append("serviceList", JSON.stringify(serviceList));
    formData.append("bio", JSON.stringify({ aboutService }));

    const userId = localStorage.getItem('userId');
    formData.append("userId", userId);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to submit profile details:", errorData);
        alert("Failed to submit profile details. Please try again.");
      } else {
        console.log("Profile details submitted successfully");
        navigate("/ServiceProviderScreen");
      }
    } catch (error) {
      console.error("Error submitting profile details:", error);
      alert("An error occurred while submitting your profile. Please try again later.");
    }
  };

  return (
    <div style={{ minWidth: "100%", minHeight: "100%", display: "flex", flexShrink: 0 }}>
      <LeftNavigation currentScreen={currentScreen} changeCurrentScreen={handleChangeScreen} />
      <div style={{ flex: 1 }}>
        {currentScreen === "Profile" ? (
          <ProfileSetUpSection
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            aboutService={aboutService}
            setAboutService={setAboutService}
            nextScreen={handleChangeScreen}
          />
        ) : (
          <ServiceSetup addService={() => setAddServiceScreenVisible(true)} serviceList={serviceList} onSubmit={submitProfileDetails} />
        )}
        {addServiceScreenVisible && <AddServiceCard onSubmit={addService} onClose={() => setAddServiceScreenVisible(false)} />}
      </div>
    </div>
  );
}

export default ProfileSetUpScreen;
