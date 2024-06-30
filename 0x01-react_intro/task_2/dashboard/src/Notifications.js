import React from "react";
import './Notifications.css';
import close from './close-icon.png'
import  { getLatestNotification } from './utils'

export default function notifications() {
    return (
        <div className="Notifications">
            <button 
                style={{ position: "absolute", right: "2px", top: "2px", cursor: "pointer", fontweight: "bold", border: "none" }}
                aria-label="close"
                onClick={console.log("Close button has been clicked")}
                >
                    <img src={ close } alt="close" width="10px"/>
                </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{__html: getLatestNotification() }}></li>
            </ul>
            
        </div>
    );
}