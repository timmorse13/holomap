import React from "react";
import Orbit from "../../Orbit/Orbit"


function LevelTwo({ name, diameter, rotation_period, orbital_period, planet_info, img, surface }) {
    return (
        <div style={{backgroundImage: `/${surface}`}} >
            {name} <br />
            {diameter} <br />
            {rotation_period}<br /> 
            {orbital_period}<br /> 
            {planet_info} <br />
            {img && !surface ? (<img src={`/${img}`} alt=''/>) : (<img src={`/${surface}`} alt=''/>) }

            {/* <Orbit/> */}

        </div>
    )
}

export default LevelTwo;