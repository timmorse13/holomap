import React, { useEffect } from 'react';
import './style.css';
var angle = 0;
let spinner;
let sign;
function Galleryspin(props) {
	useEffect(() => {
		spinner = document.querySelector('#spinner');
		if (!sign) {
			angle = angle + 45;
		} else {
			angle = angle - 45;
		}
		spinner.setAttribute(
			'style',
			'-webkit-transform: rotateY(' +
				angle +
				'deg); -moz-transform: rotateY(' +
				angle +
				'deg); transform: rotateY(' +
				angle +
				'deg);'
		);
	}, []);

	return (
		<div>
			{/* // style={{position:"absolute", top:0, left:0}} */}

			<div id='carousel'>
				<figure id='spinner'>
					{props.characters.map((character) => {
						return <img src={`/${character.image}`} />;
					})}
				</figure>
			</div>
			<span
				style={{ float: 'left' }}
				class='ss-icon'
				onclick="galleryspin('-')"
			>
				&lt;
			</span>
			<span
				style={{ float: 'right' }}
				class='ss-icon'
				onclick="galleryspin('')"
			>
				&gt;
			</span>
		</div>
	);
}

export default Galleryspin;
