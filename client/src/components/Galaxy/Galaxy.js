import React from 'react';
import '../Galaxy/Galaxy.css'

const Galaxy = () => {
	return (
		<div>
			<div cla='solar-system grid'>
				<div className= 'tatooine circle glow-yell' data-name='Tatooine' ></div>
				<div className= 'coruscant circle' data-name='Coruscant'></div>
				<div className= 'endor circle' data-name='Endor'></div>
				<div className= 'bespin circle' data-name='Bespin'></div>
			</div>
		</div>
	);
};

export default Galaxy;
