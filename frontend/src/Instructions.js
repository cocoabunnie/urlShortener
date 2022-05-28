import React from "react";

const Instructions = () => {
    return (
        <div>
            <h1>How To Use</h1>
            <p>Welcome and thank you for using my URL shortener!<br/>
            Paste the URL you would like to shorten in the textbox, and press "convert"<br/>
            The URL shortener would take the long URL and convert it into a shorter URL!<br/>
            You can also look at the "Link Analytics" page to see all the URL's made as well as how often they're used</p>
            <a href="/">
                <button>
                    Back
                </button>
            </a>
        </div>
    );
}
export default Instructions;