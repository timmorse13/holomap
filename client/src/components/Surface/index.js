import React from "react";

function Surface({name, img}) {
    return (
        <div>
            <div className = "surface" surface-name={name}>
            <img src = {`/${img}`} alt=''/>
            </div>

        </div>
    )
}

export default Surface;