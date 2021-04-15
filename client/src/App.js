import React, { useState, useEffect } from 'react';
// import React from 'react';

// import Luke from "./components/Characters/Luke"
function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getChar() {
      let res = await fetch('https://swapi.dev/api/planets/?page=2');
      let data = await res.json();
      setPeople(data.results);
      console.log(data)
    }
    async function getPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?page=2');
      let data = await res.json();
      setPlanets(data.results);
      console.log(data)

    }
    getChar();
    getPlanets();
  }, []);
  console.log('data', people)
  console.log('data', planets)

  // fetch('https://swapi.dev/api/planets/')
  // .then(response => response.json())
  // .then(data => console.log(data)
  // )
  
  
 
  
  return(
    <div className="one">
      {planets.map(planets => (
        <div>
          <br />
          pppp <br /><br />
         "climate": "{planets.climate}", <br />
         "surface_water": "{planets.surface_water}", <br />
         "name": "{planets.name}", <br />
         "diameter": "{planets.diameter}", <br />
         "rotation_period": "{planets.rotation_period} ", <br />
         "terrain": "{planets.terrain}", <br />
         "gravity": "{planets.gravity} ", <br />
         "orbital_period": "{planets.orbital_period}", <br />
         "population": "{planets.population}" <br />
         dddd
        </div>
      ))}
      {/* {JSON.stringify(planets)} */}
    </div>
  )
}









export default App;
