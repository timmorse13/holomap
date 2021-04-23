import React, { useState, useEffect, Component } from 'react';
import API from '../utils/Api';
import Characters from '../components/Characters';
import Planets from '../components/Planets';
import LevelTwo from '../components/Planet/Leveltwo';
import Planet from '../components/Planet';
import Galaxy from '../components/Galaxy/Galaxy';

function Home() {
	const [planet, setPlanet] = useState([]);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		getPlanet();
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
				</div>
			</div>
		</div>
	);
}

// class Home extends Component {
//   state = {
//     char: [],
//     plan: [],
//     charID: "",
//     message: "This works"
//   };

//   componentDidMount() {
//     this.getCharacters()
//     this.getPlanet()
//   };

//   getCharacters = () => {
//     API.getCharacters()
//     .then(res => {
//       console.log(res)
//       this.setState({
//         char: res.data
//       })
//     })
//       .catch(() =>
//       this.setState({
//         char: [],
//         message: "No work"
//       })
//       );
//   };

//   getPlanet = () => {
//     API.getPlanet("Tatooine")
//     .then(res => {
//       this.setState({
//         plan: res.data
//       })
//     })
//     .catch(() =>
//     this.setState({
//       plan: [],
//       message: "No planet"
//     })
//     );
//   };

//   render() {
//     return (
//       <div className ="viewport">
//       <main className = "One">
//         {this.state.char.map(character => {
//           return <Characters
//           name={character.name}
//           gender={character.gender}
//           skin_color={character.skin_color}
//           eye_color={character.eye_color}
//           hair_color={character.chair_color}
//           description={character.description}
//           image={character.image}

//           />

//         })}
//           </main>
//         <div className = "Two">
//           {return plan}
//           {this.state.plan.map(planet => {
//             return <LevelTwo
//             name={planet.name}
//             diameter={planet.diameter}
//             rotation_period={planet.rotation_period}
//             orbital_period={planet.orbital_period}
//             planet_info={planet.planet_info}
//             img={planet.img}

//           />
//           })}
//         </div>
//         <div className ="Three">
//           <h3>HI ANTHONY</h3>

//         </div>
//         </div>

//     )
//   }

// }

export default Home;
