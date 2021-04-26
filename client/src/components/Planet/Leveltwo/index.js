import React from "react";
// import Orbit from "../../Orbit/Orbit"
import Characsel from "../../Carousel"

function LevelTwo({ name, characters, diameter, rotation_period, orbital_period, planet_info, img, surface }) {
    return (
        <div className='planet-data row' >
            {!surface ? (
                <div>
            <h3>{name}</h3> <br />
            {/* Diameter: {diameter} km<br/>
            Rotation period: {rotation_period} days<br /> 
            Orbital period: {orbital_period} yrs<br/><br />   */}
            {planet_info} <br /> 
            <br />
            </div>
            ): (<div />)}
            {img && !surface ? (<img src={`/${img}`} class='' style={{width: '600px', margin: '0 auto', textAlign: 'center', display: 'flex' }} alt=''/>) : (<img src={`/${surface}`} alt='' style={{backgroundImage: `/${surface}`, zIndex: -1}}/>) }

            {/* <Orbit/> */}
            {/* {surface ? <div>{characters[0]}</div>:<div></div>} */}
            {/* {surface ? <div style={{position: "relative"}}>
                <Characsel 
            characters={characters}
            
            
            />
             </div>: <div></div>} */}

        </div>
    )
}


export default LevelTwo;