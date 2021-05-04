import React from "react";

function Charchive({ name, image, description, birth_year, mass, height, planet_name, eye_color, skin_color, hair_color }) {
    return (
    <div>
        <br />
        <h3>Name: {name}</h3> <br />
        {image ? (<img src={`/${image}`} style={{height: "500px", width: "250px"}}alt=''/>) : (<div />)}<br />
        Birth year: {birth_year} < br/>
        {description} <br />
        Mass: {mass}<br />
        Planet Name: {planet_name} <br />
        Height: {height} <br />
        Eye Color: {eye_color}<br />
        Skin Color: {skin_color}<br />
        Hair Color: {hair_color}<br /><br />
        
    </div>
    )
}
export default Charchive;