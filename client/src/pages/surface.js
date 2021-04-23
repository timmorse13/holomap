import React, { useState, useEffect } from "react";
import Surface from "../components/Surface";
import API from "../utils/Api";


function GetSurface() {
    const [surface, setSurface] = useState([])
    const [surfaces, setSurfaces] = useState([])

    useEffect(() => {
        Fsurface()
    }, [])

    const handleSurfaceClick = (e) => {
    const surfaceName = e.target.getAttribute("surface-name")
    setSurface(surfaceName)
    console.log(surfaceName)
}

    const Fsurface = () => {
        
        API.getPlanet(surface)
        .then(res =>  {
            console.log(res);
            setSurfaces(res.data)
            console.log(surfaces)
        })
        .catch(() => setSurface([])

        );
    };

    return (
        <div>
            <Surface 
            handleSurfaceClick={handleSurfaceClick}
            img={surfaces.img}
            />
        </div>
    )
}

export default GetSurface;