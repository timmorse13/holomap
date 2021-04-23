import React from 'react';
import '../Galaxy/Galaxy.css';

// const props = {

// }

function Galaxy(props) {
	return (
		<div className='galaxy'>
			<div
				className='tatooine'
				data-name='Tatooine'
				onClick={props.handlePlanetClick}
			></div>
			<div
				className='coruscant'
				data-name='Coruscant'
				onClick={props.handlePlanetClick}
			></div>
			<div
				className='endor'
				data-name='Endor'
				onClick={props.handlePlanetClick}
			></div>
			<div
				className='bespin'
				data-name='Bespin'
				onClick={props.handlePlanetClick}
			></div>
			<button style={{zIndex:100}} onClick={props.handleSurfaceClick}>Visit Planet</button>
		</div>
	);
} 

export default Galaxy;
