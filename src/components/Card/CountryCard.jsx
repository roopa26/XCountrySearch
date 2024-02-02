import React from "react";
import styles from './CountryCard.module.css';

function CountryCard({countryFlag, countryName, altName}){
    return (
    <div className={styles.countryCard}>
        <div className={styles.image}>
            <img src={countryFlag} alt={altName}/>
       
            <div className={styles.countryName}>
                {countryName}
             </div>
        </div>
    </div>
    )
}

export default CountryCard;