import React from "react";
import axios from "axios";
import './cssFiles/LinkCard.css';

const LinkCard = (props) => {
    const baseURL = "http://localhost:5000/" + props.shortLink;

    const deleteButton = () => {
        axios.delete("http://localhost:5000/link/" + props.shortLink, {
            shortlink: props.shortLink
        }).then(() => {
            console.log("Deletion successful!");
            props.update();
        }).catch((error) => {
            console.log(baseURL);
            console.log("Uh Oh, error! " + error);
        });
    }

    return (
        <div className="linkCard">
            <p>{props.link}</p>
                <p>Long Link: <a href = {props.url}>{props.url}</a></p>
                <p>Short Link: <a href = {baseURL}>{baseURL}</a></p>
                <p>Amount Of Uses: {props.clicks}</p>
            
            <button className = "deleteBtn" value={props.shortLink} onClick={event => deleteButton(event)}>Delete</button>
        </div>
    );
}
export default LinkCard;