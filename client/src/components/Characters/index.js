import React from "react";

function Characters({ name, gender, skin_color, eye_color, hair_color, description, image }) {
    return (
        <div>
            {name} <br />
            {gender}<br />
            {skin_color}<br />
            {eye_color}<br />
            {hair_color}<br />
            {description}<br />
            {image ? (<img src={`/${image}`} alt=""/>) : (<div />) }
        </div>
    )
}

export default Characters;