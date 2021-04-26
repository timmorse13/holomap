import React from 'react';
import '../Galaxy/Galaxy.css';

// const props = {

// }

function Galaxy(props) {
	return (
		<div className=''>
			<div className='galaxy row justify-content-around p-2'>
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
					data-name='Naboo'
					onClick={props.handlePlanetClick}
				></div>
				<div
					className='bespin'
					data-name='Death Star'
					onClick={props.handlePlanetClick}
				></div>
			</div>
			<div className='row justify-content-around pt-3'>
				<button
					id='visit-btn'
					style={{ zIndex: 100 }}
					onClick={props.handleSurfaceClick}
				>
					Visit Planet
				</button>
			</div>
		</div>
	);
}

export default Galaxy;
