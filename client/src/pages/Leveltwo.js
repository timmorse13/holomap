import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import API from '../utils/Api';
import LevelTwo from '../components/Planet/Leveltwo';

function Leveltwo() {
	// const { name } = useParams()
	const [planet, setPlanet] = useState([]);

	useEffect(() => {
		getPlanet();
		console.log();
	}, []);

	const getPlanet = () => {
		// console.log(name)
		API.getPlanet()
			.then((res) => {
				console.log(res);
				setPlanet(res.data);
			})
			.catch(() => setPlanet([]));
	};

	return (
		<div>
			<LevelTwo img={planet.img} />
			<LevelTwo
				name={planet.name}
				diameter={planet.diameter}
				rotation_period={planet.rotation_period}
				orbital_period={planet.orbital_period}
				planet_info={planet.planet_info}
			/>
			{/* {planet.name} <br />
                {planet.diameter} <br/>
                {planet.rotation_period}<br /> 
                {planet.orbital_period}<br /> 
                {planet.planet_info} <br />
                {planet.img} */}
			{/* /* {img ? (<img src={`/${img}`} />) : (<div />) } */}
		</div>
	);
}

export default Leveltwo;
