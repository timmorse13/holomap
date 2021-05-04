import React from "react";

function Planetarchive({ name, description, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, planet_info, img }) {
    return (
    <div>
        <h3>Planet Name: {name}</h3><br />
        {img ? (<img src={`/${img}`}  style={{height:"200px", width: "200px"}} alt=''/>) : (<div />) }<br />< br />
        Rotation Period: {rotation_period}<br />
        Orbital Period: {orbital_period}<br />
        Diameter: {diameter}<br />
        Climate: {climate}<br />
        Gravity: {gravity}<br />
        Terrain: {terrain}<br />
        Surface Water: {surface_water}<br />
        Population: {population}<br />
        Description: {description}<br />
        Planet Info: {planet_info}<br /><br />
    
    </div>
    )
}
export default Planetarchive;