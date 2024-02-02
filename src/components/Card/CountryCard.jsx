import React from "react";
import './CountryCard.css';

function CountryCard({countryFlag, countryName, altName}){
    return (
    <div className="countryCard">
        <div className="image">
            <img src={countryFlag} alt={altName}/>
       
            <div className="countryName">
                {countryName}
             </div>
        </div>
    </div>
    )
}

export default CountryCard;