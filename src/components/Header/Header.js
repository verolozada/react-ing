import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <h3 className="title">Remember It!</h3>

        <h5 className="scores">Current Score: {props.count} | Highest Score: {props.highest} </h5>

        <p>Let's see how is your memory by playing memory cards. <br/>Just click in any card to start playing then click in a different card until you clicked them all <br/>BUT if you click twice on the same card GAME OVER. <br />Good Luck!</p>

    </div>
)

export default Header;