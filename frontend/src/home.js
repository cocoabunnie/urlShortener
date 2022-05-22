import React from "react";
import axios from 'axios';

const Home = (props) => {
    return (
        <div>
            <h1 class = "homeHeader">Hello!</h1>
            <input class="urlInput" type="text" placeholder="Enter long URL here"/>
            <button class="shortenUrlButton">Get Short URL</button>
            <br/>
            <div class = "newURLDisplay"></div>
            <br/>
            <a href="/analytics">Created Links</a>
        </div>
    );

} 
export default Home;