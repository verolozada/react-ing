import React from "react";
import "./CountryCard.css";

const CountryCard = props => (
    <div className="card col s6">
            <img alt={props.name} src={props.image}  onClick={()=> props.clicked(props.id)}/>
    </div>
);


export default CountryCard;