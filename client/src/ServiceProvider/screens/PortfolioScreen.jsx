import React from "react";
import removeBlobPrefix from "../../blobRemover";
import ServiceCard from "../components/ServiceCard2";

const contentStyle = {
    flex: 1,
    padding: '0px 0px 0px 50px',
    overflow: "auto",
    marginLeft: "20px"
};

function PortfolioScreen({ listOfServices }) {

    // Check if listOfServices is undefined or null
    if (!listOfServices) {
        return <div>Loading...</div>; // or handle loading state as per your UI/UX design
    }

    return (
        <div style={contentStyle}>
            <h1 style={{ textAlign: "left", paddingLeft: "20px" }}>Services</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {listOfServices.map((service, index) => (
                    <ServiceCard
                        key={index}
                        name={service.name} // Assuming `aboutService` is a property of each service object
                        image={removeBlobPrefix(service.image)} // Assuming `image` is a property of each service object
                    />
                ))}
            </div>
        </div>
    );
}

export default PortfolioScreen;
