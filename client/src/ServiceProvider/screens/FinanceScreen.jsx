import React, { useState } from "react";
import image from "../../images/wallet.png";
import AccountBalanceScreen from "../../ServiceProvider/screens/AccountBalanceScreen";

function WorkInProgress({ requestList }) {
    return (
        <div style={{
            marginTop: "10px",
            padding: "20px",
            overflowY: "auto",
            height: "70%",
            scrollbarWidth: "none", /* For Firefox */
            msOverflowStyle: "none" /* For Internet Explorer and Edge */
        }}>
            {requestList.map((request, index) => (
                <div key={index} style={{
                    display: "flex",
                    alignItems: "center",
                    height: "50px",
                    padding: "10px",
                    margin: "10px",
                    border: "1px solid gray",
                    borderRadius: "15px",
                    justifyContent: "space-between"
                }}>
                    <div style={{ width: "30%", display: "flex", alignItems: "center" }}>
                        <img src={image} alt="User" style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            marginRight: "10px",
                        }} />
                        <div>
                            <p style={{ fontSize: "14px", fontWeight: "bold", textAlign: "left", marginBottom: 0, marginTop: 10 }}>{request.name}</p>
                            <p style={{ fontSize: "13px", fontWeight: "bold", textAlign: "left", marginBottom: 10, marginTop: 10, color: "gray" }}>Logo Design</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: "13px", fontWeight: "bold", textAlign: "left", marginBottom: 0, marginTop: 10 }}>{request.dueDate}</p>
                    </div>
                </div>
            ))}
            <div style={{ height: "100px" }}></div>
        </div>
    );
}

const requestList = [
    { name: "Mohammed Ali", dueDate: "45 hours remaining" },
    { name: "Mohammed Ali", dueDate: "46 hours remaining" },
    { name: "Mohammed Ali", dueDate: "46 hours remaining" },
    { name: "Mohammed Ali", dueDate: "46 hours remaining" },
    { name: "Mohammed Ali", dueDate: "46 hours remaining" },
    { name: "Mohammed Ali", dueDate: "46 hours remaining" },
    { name: "Mohammed Ali", dueDate: "46 hours remaining" },
    { name: "Mohammed Ali", dueDate: "46 hours remaining" },
    { name: "Mohammed Ali", dueDate: "46 hours remaining" },
    { name: "Mohammed Ali", dueDate: "48 hours remaining" }
];

const titleStyle = {
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
    marginLeft: "10px",
    color: "gray"
}

const infoStyle = {
    textAlign: "left",
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "0px",
    marginLeft: "10px"
}

const selectedTitleStyle = {
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
    marginLeft: "10px",
    color: "green"
}

const selectedInfoStyle = {
    textAlign: "left",
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "0px",
    marginLeft: "10px"
}

function FinanceScreen() {
    const [selectedSection, setSelectedSection] = useState('WorkInProgress');

    return (
        <div style={{ flex: 1, height: "calc(100vh - 64px)", overflow: "hidden", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "100%", display: 'flex', flexDirection: 'column', padding: "20px 20px 0 20px" }}>
                <h2 style={{ textAlign: "left", fontSize: "40px", marginBottom: "10px", marginTop: "10px" }}>Overview</h2>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "300px" }} onClick={() => setSelectedSection('WorkInProgress')}>
                        <p style={selectedSection === 'WorkInProgress' ? selectedTitleStyle : titleStyle}>Work in progress</p>
                        <p style={selectedSection === 'WorkInProgress' ? selectedInfoStyle : infoStyle}>20,000/=</p>
                        {selectedSection === 'WorkInProgress' && <div style={{ borderBottom: "2px solid green", width: "100%", height: "1px" }}></div>}
                    </div>

                    <div style={{ width: "300px" }} onClick={() => setSelectedSection('AccountBalance')}>
                        <p style={selectedSection === 'AccountBalance' ? selectedTitleStyle : titleStyle}>Account Balance</p>
                        <p style={selectedSection === 'AccountBalance' ? selectedInfoStyle : infoStyle}>20,000/=</p>
                        {selectedSection === 'AccountBalance' && <div style={{ borderBottom: "2px solid green", width: "100%", height: "1px" }}></div>}
                    </div>

                    <div style={{ width: "300px", paddingRight: "40px" }} onClick={() => setSelectedSection('TotalEarned')}>
                        <p style={selectedSection === 'TotalEarned' ? selectedTitleStyle : titleStyle}>Total earned</p>
                        <p style={selectedSection === 'TotalEarned' ? selectedInfoStyle : infoStyle}>20,000/=</p>
                        {selectedSection === 'TotalEarned' && <div style={{ borderBottom: "2px solid green", width: "100%", height: "1px" }}></div>}
                    </div>
                </div>
            </div>

            {selectedSection === 'WorkInProgress' && (
                <div>
                    <WorkInProgress requestList={requestList} />
                </div>
            )}
            {selectedSection === 'AccountBalance' && (
                <div>
                    <AccountBalanceScreen />
                </div>
            )}
            {selectedSection === 'TotalEarned' && (
                <div>
                    <p>Total Earned details here</p>
                </div>
            )}
        </div>
    );
}

export default FinanceScreen;
