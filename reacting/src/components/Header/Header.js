import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <h3 className="title">Remember It!</h3>

        <h5>Current Score: {props.count} | Highest Score: {props.highest} </h5>

        
    </div>
)

export default Header;