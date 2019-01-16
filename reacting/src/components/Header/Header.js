import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        <div>
            <h1 className="header">Don't Forget!</h1>

        </div>
        <div>
            <h2>Current score: {props.count}</h2>
            <h2>Highest Score: {props.highest}</h2>
        </div>
    </div>
)
export default Header;