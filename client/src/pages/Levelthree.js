import React, { useState, useEffect } from "react";
import API from "../utils/Api";
import LevelThree from "../components/Planet/Levelthree"


function Levelthree() {
    const [planChar, setPlanChar] = useState([])

        
    

    useEffect(() => {
        getPlanet()
    },[])
    
    
    const getPlanet = () => {
        console.log('dis tim')
        API.getPlanet("Tatooine")
        .then(res =>  {
            console.log(res);
            setPlanChar(res.data.characters)
        })
        .catch(() => setPlanChar([])

        );
    };
    console.log(planChar)

    
    
    return (
        <div>
            hi
            bye
            {planChar.map(character => {
                
            return <LevelThree key={character.name}
            name={character.name}
            image={character.image}
            />
            })}

           
  

        </div>

    )
}

export default Levelthree;