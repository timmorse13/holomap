import React, { useState, useEffect } from 'react';
// import Luke from "./components/Characters/Luke"
function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getChar() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);

    }
    async function getPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/');
      let data = await res.json();
      setPlanets(data.results);

    }
    getChar();
    getPlanets();
  }, []);
  console.log('data', people)
  console.log('data', planets)
  
  return( 
    <div className="one">
      Ayyy
    </div>
  )
}



export default App;
