import React, { useState, useEffect, Component } from "react";
import API from "../utils/Api"
import Characters from "../components/Characters";
import Planets from "../components/Planets";
import LevelTwo from "../components/Planet/Leveltwo"
import Planet from "../components/Planet";
import Galaxy from "../components/Galaxy/Galaxy"
import LevelThree from "../components/Planet/Levelthree";


function Home() {
  const [planet, setPlanet] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getPlanet()
    getCharacters()
    // loadPlanets()
  }, [planet])

  const handlePlanetClick = (e) => {
    const planetName = e.target.getAttribute("data-name")
    console.log(planetName)
    setPlanet(planetName)

  }
  const getPlanet = () => {
    API.getPlanet(planet)
    .then(res =>  {
      setPlanets(res.data)
      
    })
    .catch(() => setPlanets([])

    );
  }

  const getCharacters = () => {
    API.getPlanet(planet)
    .then(res => {
      setCharacters(res.data.characters)
    })
  }


    // const loadPlanets = () => {
    //   API.getPlanets()
    //   .then(res => {
    //     setPlanets(res.data)
    //   })
    //   .catch(() => setPlanets([]))
    // }





return (
  <div className ="viewport">
        <main className = "One">
          <LevelTwo
  
  img={planets.img}
  
  />


            </main>
          <div className = "Two">
            look at dis
            <Galaxy 
            
            handlePlanetClick = {handlePlanetClick}
            // name={planet.handlePlanetClick}
            />
                        
          </div>
          <div className ="Three">
            <h3>HI ANTHONY</h3>
            <LevelTwo
            
            name={planets.name}
            diameter={planets.diameter}
            rotation_period={planets.rotation_period} 
            orbital_period={planets.orbital_period} 
            planet_info={planets.planet_info}

            />

          </div>
          <div>
            {characters.map(character => {
              return <LevelThree key={character.name}
              name={character.name}
              image={character.image}
              />
            })}
          </div>
          </div>                
        
      )




};




export default Home;
