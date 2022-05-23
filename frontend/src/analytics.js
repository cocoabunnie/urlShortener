import React, { useEffect, useState } from "react";
import axios from "axios";

function Analytics() {
    const d = [];
    const baseURL = "http://localhost:5000";
    const[linkData, setLinkData] = useState([]);
    
    useEffect(() => {
        axios.get(baseURL+"/api/get-data", {}).then(function(response){
            setLinkData(response.data);
        }).catch(error => {
            console.log("Uh oh!" + error);
        });
    }, []);

    const renderCards = () => {
        
    }

    return (
        
        <div>
            <h1>Welcome to the Link Analytics</h1>
    
            <div className = "dataDisplayContainer">
                {linkData.map((link) => {
                    return <h1>{link.url}</h1>
                })}
            </div>

            <a href="/">back</a>
        </div>
    );
}
export default Analytics;