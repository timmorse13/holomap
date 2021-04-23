import React from 'react';
import '../Galaxy/Galaxy.css'



function Galaxy(props) {
	return (
			<div>
				<div className= 'tatooine circle glow-yell' data-name='Tatooine' onClick ={props.handlePlanetClick}></div>
				<div className= 'coruscant circle' data-name='Coruscant' onClick ={props.handlePlanetClick}></div>
				<div className= 'endor circle' data-name='Endor' onClick ={props.handlePlanetClick}></div>
				<div className= 'bespin circle' data-name='Bespin' onClick ={props.handlePlanetClick}></div>
			</div>
		
	)
}


export default Galaxy;
