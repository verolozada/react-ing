import React from "react";
import "./CountryCard.css";

const CountryCard = props => (
    <div className="card">
            <img alt={props.name} src={props.image}  onClick={()=> props.clicked(props.id)}/>
    </div>
);


export default CountryCard;