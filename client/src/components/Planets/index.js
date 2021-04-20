import React from "react";
function Planets({ climate, surface_water, name, diameter, rotation_period, terrain, gravity, orbital_period, population, description, planet_info, img}) {
    return (
        <div>
            {name} <br />
            {climate} <br />
            {surface_water}<br />
            {diameter} <br />
            {rotation_period}<br /> 
            {terrain} <br />
            {gravity} <br />
            {orbital_period}<br /> 
            {population} <br />
            {description}<br />
            {planet_info} <br />
            {img ? (<img src={`/${img}`} />) : (<div />) }

        </div>
    )
}

export default Planets;