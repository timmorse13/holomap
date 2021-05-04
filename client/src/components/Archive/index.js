import React from "react";

function Charchive({ name, image, gender, description, birth_year, mass, height, planet_name, eye_color, skin_color, hair_color }) {
    return (
    <div>
        <h3>Name: {name}</h3> <br />
        <img src={`/${image}`} alt=''/><br />
        Birth year: {birth_year} < br/>
        {description} <br />
        Mass: {mass}<br />
        Planet Name: {planet_name} <br />
        Height: {height} <br />
        Eye Color: {eye_color}<br />
        Skin Color: {skin_color}<br />
        Gender: {gender}<br />
        Hair Color: {hair_color}<br /><br />
        
    </div>
    )
}
export default Charchive;