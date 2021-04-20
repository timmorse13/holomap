import React from "react";

function Characters({ name, gender, skin_color, eye_color, hair_color, description }) {
    return (
        <div>
            {name} <br />
            {gender}<br />
            {skin_color}<br />
            {eye_color}<br />
            {hair_color}<br />
            {description}<br />
        </div>
    )
}

export default Characters;