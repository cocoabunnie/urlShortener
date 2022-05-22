import React from "react";
import { useState } from "react";
import axios from 'axios';

const Home = (props) => {
    const baseURL = "http://localhost:5000";
    const [url, setURL] = useState("");

    const submitLink = (props) => {
        axios.post(baseURL+"/api/create-url", {
            url: url
        }).then(() => {
            console.log("REACT Add successful!");
        }).catch((error) => {
            console.log("Uh Oh, error! " + error);
        });
    }

    return (
        <div>
            <h1 className = "homeHeader">Hello!</h1>
            <input className="urlInput" type="text" placeholder="Enter long URL here" onChange = {event => setURL(event.target.value)}/>
            <button className="shortenUrlButton" onClick={() => submitLink()}>Get Short URL</button>
            <br/>
            <div className = "newURLDisplay"></div>
            <br/>
            <a href="/analytics">Created Links</a>
        </div>
    );

} 
export default Home;