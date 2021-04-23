import React from 'react';
import '../Orbit/Orbit.css';

const Orbit = () => {
	return (
		<div>
			<div className='view-screen'>
				<div className='planet'>
					<div className='wrap'>
						<div className='background'></div>
						<div className='clouds'></div>
					</div>
					<div className='mask'></div>
				</div>
			</div>
		</div>
	);
};

export default Orbit;
