import React, { useState, useEffect } from 'react';
// import React from 'react';

// import Luke from "./components/Characters/Luke"
function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getChar() {
      let res = await fetch('https://swapi.dev/api/people/?page=9');
      let data = await res.json();
      setPeople(data.results);
      console.log(data)
    }
    async function getPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?page=3');
      let data = await res.json();
      // setPlanets(data.results);
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
      {people.map(person => (
        <div>
          <br />
          pppp <br /><br />
         "name": "{person.name}", <br />
         "gender": "{person.gender}", <br />
         "skin_color": "{person.skin_color}", <br />
         "hair_color": "{person.hair_color}", <br />
         "height": "{person.height} cm", <br />
         "eye_color": "{person.eye_color}", <br />
         "mass": "{person.mass} kg", <br />
         "homeworld": "{person.homeworld}", <br />
         "birth_year": "{person.birth_year}", <br />
         "starships": "{person.starships}", <br />
         "species": "{person.species}" <br /><br />
         dddd
        </div>
      ))}
      {/* {JSON.stringify(people)} */}
    </div>
  )
}









export default App;
