import React, { useState } from "react";
import AddServiceCard from "./AddServiceCard";

function AddServiceButton({ onClick }) {
  return (
    <div
      style={{
        border: "2px dotted gray",
        width: "200px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        borderRadius: "15px",
        justifyContent: 'center',
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <p style={{ textAlign: "center" }}>Add Service</p>
    </div>
  );
}

function ServiceSetupCard({ service }) {
  return (
    <div style={{
      backgroundColor: "#003912",
      width: "208px",
      height: "260px",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #003912",
      borderRadius: "15px",
      overflow: "hidden"
    }}>
      <div style={{ height: "30%", display: "flex", alignItems: "center" }}>
        <p style={{ color: "white", fontWeight: "bold", padding: "10px", textAlign: "left", fontSize: "20px", margin: "0px" }}>
          {service.name}
        </p>
      </div>
      <div style={{ width: "198px", flex: 1, backgroundColor: "#80CBA0", margin: "0 5px", marginBottom: "5px", border: "1px solid #80CBA0", borderRadius: "15px", overflow: "hidden" }}>
        <img src= {service.image} alt="Service" style={{ backgroundColor: "#80CBA0", objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

function ServiceSetup({ addService, serviceList, onSubmit }) {
  const [addServiceScreenVisible, setAddServiceScreenVisible] = useState(false);

  const handleAddService = (serviceDetails) => {
    addService(serviceDetails);
    setAddServiceScreenVisible(false);
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      paddingLeft: "80px",
      boxSizing: "border-box",
      flex: 1
    }}>
      <div style={{
        flexShrink: 0,
        marginBottom: "20px"
      }}>
        <h1 style={{ textAlign: "left", fontSize: "40px" }}>Service</h1>
        <p style={{ textAlign: "left", color: "gray" }}>Add Services that you want to provide to your clients</p>
      </div>
      <div style={{
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        overflowY: "auto",
        paddingRight: "20px",
        boxSizing: "border-box",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        <AddServiceButton onClick={() => setAddServiceScreenVisible(true)} />
        {serviceList.map((service) => (
          <ServiceSetupCard key={service.id} service={service} />
        ))}
      </div>
      {addServiceScreenVisible && (
        <AddServiceCard
          onClose={() => setAddServiceScreenVisible(false)}
          onSubmit={handleAddService}
        />
      )}
      <div style={{
        flexShrink: 0,
        marginTop: "20px",
        height: "10%",
        display: "flex",
        justifyContent: "left",
        alignItems: "center"
      }}>
        <button style={{
          width: "130px",
          padding: "10px",
          color: "white",
          backgroundColor: "green",
          border: "1px solid green",
          borderRadius: "15px",
          height: "40px"
        }} onClick={onSubmit}>
          Finish
        </button>
      </div>
    </div>
  );
}

export default ServiceSetup