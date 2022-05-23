import React from "react";
import { useState } from "react";
import axios from 'axios';
import './cssFiles/Home.css';

const Home = (props) => {
    const baseURL = "http://localhost:5000";
    const [url, setURL] = useState("");

    const submitLink = (props) => {
        axios.post(baseURL+"/api/create-url", {
            url: url
        }).then((response) => {
            console.log("REACT Add successful!");
            document.querySelector(".newURLDisplay").innerHTML = `<p>Here's your new link: <a href=${baseURL}/${response.data.shortlink}>${baseURL}/${response.data.shortlink}</a></p>`;
        }).catch((error) => {
            console.log("Uh Oh, error! " + error);
        });
    }

    return (
        <div className="homePageContainer">
            <title>TEST</title>
            <div className="navBar">
                <a href="/analytics">Link Analytics</a>
                <a href="/instructions">How To Use</a>
            </div>

            <div className = "centeredContainer">
                <div className = "homeScreenContainer">
                    <h1 className = "homeHeader">Welcome To The URL Shortener!</h1>
                    <div className = "searchArea">
                        <input className="urlInput" type="text" placeholder="Enter long URL here" onChange = {event => setURL(event.target.value)}/>
                        <button className="shortenUrlButton" onClick={() => submitLink()}>Convert</button>
                    </div>
                    
                    <br/>
                    <div className = "newURLDisplay"></div>
                    <br/>
                    
                </div>
            </div>

        </div>

        
        
    );

} 
export default Home;