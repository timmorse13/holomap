import React from "react";
// import Orbit from "../../Orbit/Orbit"
import Galleryspin from "../../Surface"

function LevelTwo({ name, characters, diameter, rotation_period, orbital_period, planet_info, img, surface }) {
    return (
        <div  >
            {!surface ? (
                <div>
            {name} <br />
            {diameter} <br />
            {rotation_period}<br /> 
            {orbital_period}<br /> 
            {planet_info} <br /> 
            </div>
            ): (<div />)}
            {img && !surface ? (<img src={`/${img}`} alt=''/>) : (<img src={`/${surface}`} alt='' style={{backgroundImage: `/${surface}`, zIndex: -1}}/>) }

            {/* <Orbit/> */}
            {surface ? <div style={{position: "relative"}}>
                <Galleryspin 
            characters={characters}
            
            
            /> </div>: <div></div>}

        </div>
    )
}


export default LevelTwo;