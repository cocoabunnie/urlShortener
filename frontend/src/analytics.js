import React, { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import axios from "axios";

function Analytics() {
    const baseURL = "http://localhost:5000";
    const[linkData, setLinkData] = useState([]);
    
    useEffect(() => {
        axios.get(baseURL+"/api/get-data", {}).then(function(response){
            setLinkData(response.data);
        }).catch(error => {
            console.log("Uh oh!" + error);
        });
    }, []);

    return (
        
        <div>
            <h1>Welcome to the Link Analytics</h1>
    
            <div className = "dataDisplayContainer">
                {linkData.map((link) => {
                    return <LinkCard shortLink = {link.shortlink} url = {link.url}/>
                })}
            </div>

            <a href="/">back</a>
        </div>
    );
}
export default Analytics;