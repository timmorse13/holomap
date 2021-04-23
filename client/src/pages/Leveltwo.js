import React, { useState, useEffect } from "react";
import API from "../utils/Api";
import LevelTwo from "../components/Planet/Leveltwo"


function Leveltwo() {
    const [planet, setPlanet] = useState([])

        
    

    useEffect(() => {
        getPlanet()
        console.log('where u at')
    },[])
    
    
    const getPlanet = () => {
        API.getPlanet("Tatooine")
        .then(res =>  {
            console.log(res)
            setPlanet(res.data)
        })
        .catch(() => setPlanet([])

        );
    };

        return (
            <div>
                < LevelTwo 
                img={planet.img}
                
                
                
                />
                <LevelTwo 
                name={planet.name}
                diameter={planet.diameter}
                rotation_period={planet.rotation_period} 
                orbital_period={planet.orbital_period} 
                planet_info={planet.planet_info}
                
                />

      

              </div>

        )
    

}

export default Leveltwo;