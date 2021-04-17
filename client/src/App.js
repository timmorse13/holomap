import React, { useState, useEffect } from 'react';
// import React from 'react';

// import Luke from "./components/Characters/Luke"
function App() {
  const [people, setPeople] = useState([]);
  const [starships, setStarShips] = useState([]);

  useEffect(() => {
    async function getChar() {
      let res = await fetch('https://swapi.dev/api/planets/?page=2');
      let data = await res.json();
      setPeople(data.results);
      console.log(data)
    }
    async function getStarShips() {
      let res = await fetch('https://swapi.dev/api/starships/?page=1');
      let data = await res.json();
      setStarShips(data.results);
      console.log(data)

    }
    getChar();
    getStarShips();
  }, []);
  console.log('data', people)
  console.log('data', starships)

  // fetch('https://swapi.dev/api/planets/')
  // .then(response => response.json())
  // .then(data => console.log(data)
  // )
  
  
 
  
  return(
    <div className="one">
      {starships.map(starships => (
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
