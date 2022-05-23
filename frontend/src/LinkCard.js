import React from "react";

const LinkCard = (props) => {
    const baseURL = "http://localhost:3000/" + props.shortLink;

    return (
        <div className="linkCard">
            <p>{props.link}</p>
                <p>Long Link: <a href = {props.url}>{props.url}</a></p>
                <p>Short Link: <a href = {baseURL}>{baseURL}</a></p>
            
            <button value={props.shortLink}>Delete</button>
        </div>
    );
}
export default LinkCard;