import React from 'react';
import '../Orbit/Orbit.css';

const Orbit = () => {
	return (
		<div className='row justify-content-center '>
			<div className='planet justify-content-center align-items-center'>
				<div className='wrap'>
					<div className='background'></div>
					<div className='clouds'></div>
				</div>
				<div className='mask'></div>
			</div>
		</div>
	);
};

export default Orbit;
