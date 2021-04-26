import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Leveltwo from "./pages/Leveltwo";
import openApp from "./pages/Open"
import Levelthree from "./pages/Levelthree"
import './App.css'
import Profile from "./pages/Profile";
import Search from "./pages/Archive";
import Trials from "./pages/Trials"

import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  return(
    <Router>
      <div className='container-fluid'>
        <Switch>
          <Route exact path="/Holodex" component={Home} />
          <Route exact path="/" component={openApp} />
          {/* <Route exact path="/planet/levelone/:name" component={Levelone} /> */}
          <Route exact path="/planet/leveltwo/:name" component={Leveltwo} />
          <Route exact path="/planet/levelthree/:name" component={Levelthree} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/Archive" component={Search} />
          <Route exact path="/Trials" component={Trials} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Signup" component={Signup} />

        </Switch>
      </div>
      <div>

      </div>
      <div>

      </div>

    </Router>
  );
}

export default App;

// *******




















// import React, { useState, useEffect } from 'react';
// import React from 'react';

// import Luke from "./components/Characters/Luke"
// function App() {
//   const [people, setPeople] = useState([]);
//   const [starships, setStarShips] = useState([]);

//   useEffect(() => {
//     async function getChar() {
//       let res = await fetch('https://swapi.dev/api/planets/?page=2');
//       let data = await res.json();
//       setPeople(data.results);
//       console.log(data)
//     }
//     async function getStarShips() {
//       let res = await fetch('https://swapi.dev/api/starships/?page=1');
//     async function getPlanets() {

//       let res = await fetch('https://swapi.dev/api/planets/?page=5');

//       let res = await fetch('https://swapi.dev/api/planets/?page=3');

//       let data = await res.json();
//       setStarShips(data.results);
//       console.log(data)

//     }
//     getChar();
//     getStarShips();
//   }, []);
//   console.log('data', people)
//   console.log('data', starships)

  // fetch('https://swapi.dev/api/planets/')
  // .then(response => response.json())
  // .then(data => console.log(data)
  // )
  
  
 
  
//   return(
//     <div className="one">
//       {starships.map(starships => (
//         <div>
//           <br />
//           pppp <br /><br />
//          "climate": "{planets.climate}", <br />
//          "surface_water": "{planets.surface_water}", <br />
//          "name": "{planets.name}", <br />
//          "diameter": "{planets.diameter}", <br />
//          "rotation_period": "{planets.rotation_period} ", <br />
//          "terrain": "{planets.terrain}", <br />
//          "gravity": "{planets.gravity} ", <br />
//          "orbital_period": "{planets.orbital_period}", <br />
//          "population": "{planets.population}" <br />
//          dddd
//         </div>
//       ))}
//       {/* {JSON.stringify(planets)} */}
//     </div>
//   )
// }








