import React from "react";
// import Orbit from "../../Orbit/Orbit"


function LevelTwo({ name, diameter, rotation_period, orbital_period, planet_info, img }) {
    return (
        <div>
            {/* {name} <br />
            {diameter} <br />
            {rotation_period}<br /> 
            {orbital_period}<br /> 
            {planet_info} <br /> */}
            {img ? (<img src={`/${img}`} style={{width: '600px', margin: '0 auto', textAlign: 'center', display: 'flex' }} alt=''/>) : (<div />) }
            {/* <Orbit/> */}

        </div>
    )
}

export default LevelTwo;