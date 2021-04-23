
import React, { useState, useEffect } from "react";
import API from "../utils/Api"
import Characters from "../components/Characters";
import Planets from "../components/Planets/";
import LevelTwo from "../components/Planet/Leveltwo"
import Planet from "../components/Planet";
import Galaxy from "../components/Galaxy/Galaxy"
import LevelThree from "../components/Planet/Levelthree";


function Home() {
	const [planet, setPlanet] = useState([]);
	const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [surface, setSurface] = useState("");
  // const [loading, setLoading] = useState(false)

	useEffect(() => {
		getPlanet();
    getCharacters()
    // setLoading(true)
		// loadPlanets()
	}, [planet]);

	const handlePlanetClick = (e) => {
		const planetName = e.target.getAttribute('data-name');
		console.log(planetName);
		setPlanet(planetName);
	};
	const getPlanet = () => {
		// console.log(name)
		API.getPlanet(planet)
			.then((res) => {
				setPlanets(res.data);
			})
			.catch(() => setPlanets([]));
	};

  const getCharacters = () => {
    API.getPlanet(planet)
    .then(res => {
      setCharacters(res.data.characters)
    })
    .catch(()=> setCharacters([])
    );
  }

  const handleSurfaceClick = () => {
    
  }

  // if(loading) {
  //   return <p>Data is loading...</p>
  // }

	// const loadPlanets = () => {
	//   API.getPlanets()
	//   .then(res => {
	//     setPlanets(res.data)
	//   })
	//   .catch(() => setPlanets([]))
	// }

	return (
		<div className='viewport container mt-5'>
			<div className='row'>
				<main className='One border border-info rounded col-12'>
					<LevelTwo img={planets.img} />
				</main>
				<div className='Two border border-info col-7'>
					<Galaxy
						handlePlanetClick={handlePlanetClick}
						// name={planet.handlePlanetClick}
					/>
				</div>
				<div className='Three border border-info overflow-auto col-5 '>
					<LevelTwo
						name={planets.name}
						diameter={planets.diameter}
						rotation_period={planets.rotation_period}
						orbital_period={planets.orbital_period}
						planet_info={planets.planet_info}
					/>
          {characters ? characters.map(character => {
              return <LevelThree key={character.name}
              name={character.name}
              image={character.image}
              />
            }) : <div></div>}
				</div>
			</div>
		</div>
	);
}


export default Home;