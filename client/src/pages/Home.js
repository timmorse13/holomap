import React, { useState, useEffect } from 'react';
import API from '../utils/Api';
import Characters from '../components/Characters';
import Planets from '../components/Planets/';
import LevelTwo from '../components/Planet/Leveltwo';
import Planet from '../components/Planet';
import Galaxy from '../components/Galaxy/Galaxy';
import LevelThree from '../components/Planet/Levelthree';
import Modal from '../components/Modal';
// import { debounce } from 'debounce';
// import Surface

const BUTTON_WRAPPER_STYLES = {
	// position: 'relative',
	// zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
	// position: 'relative',
	// zIndex: 2,
	// backgroundColor: 'red',
	// padding: '10px',
};

function Home() {
	const [planet, setPlanet] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [surface, setSurface] = useState('');
	// const [loading, setLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		getPlanet();
		getCharacters();
		// setLoading(true)
		// loadPlanets()
	}, [planet]);

	const handlePlanetClick = (e) => {
		const planetName = e.target.getAttribute('data-name');
		console.log(planetName);
		setPlanet(planetName);
		setSurface(null);
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
			.then((res) => {
				setCharacters(res.data.characters);
				console.log(res.data.characters);
			})
			.catch(() => setCharacters([]));
	};

	const handleSurfaceClick = () => {
		setSurface(planets.surface_img);
		console.log(planets) 
	};

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
		<div>
			<div
				// style={BUTTON_WRAPPER_STYLES}
				onClick={() => console.log('clicked')}
			>
				<button onClick={() => setIsOpen(true)}>HOLIDEX</button>

				<Modal open={isOpen} onClose={() => setIsOpen(false)}>

				<div className='viewport container border border-5 border-info mt-4 shadow-lg'>
					<div className='row m-3 justify-content-between'>
						<main className='One border border-info rounded-top col-12'>
							<LevelTwo
								img={planets.img}
								surface={surface}
								characters={characters}
							/>
						</main>
						<div className='Two border border-info rounded-pill p-2 mt-3 col-6 '>
							<Galaxy
								handlePlanetClick={handlePlanetClick}
								handleSurfaceClick={handleSurfaceClick}
							/>
						</div>
						<div className='Three border border-info overflow-auto p-3 mt-3  col-5'>
							<LevelTwo
								name={planets.name}
								diameter={planets.diameter}
								rotation_period={planets.rotation_period}
								orbital_period={planets.orbital_period}
								planet_info={planets.planet_info}
							/>

							{characters ? (
								characters.map((character) => {
									return (
										<LevelThree
											key={character.name}
											name={character.name}
											image={character.image}
										/>
									);
								})
							) : (
								<div></div>
							)}
						</div>
					</div>
				</div>
				</Modal>

			</div>
		</div>
	);
}

export default Home;
