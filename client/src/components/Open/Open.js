import React, { Suspense } from 'react';
import Title from './Title/Title';
// import ByLine from "./Byline"

const ByLine = React.lazy(() => import('./Byline/ByLine'));

const Open = () => {
	return (
		<div className='d-flex justify-content-center'>
			<div className=''>
				<a href='/profile'>
					<button className='btn btn-outline-warning'>Profile</button>
				</a>
				<a href='/Holodex'>
					<button className='btn btn-outline-warning'>Holodex</button>
				</a>
				<a href='/Archive'>
					<button className='btn btn-outline-warning'>Archives</button>
				</a>
			</div>
			<Suspense
				fallback={
                    <div>A long time ago, in a galaxy far, far away...</div>
				}
			>
				<ByLine />
			</Suspense>
            <Title />
		</div>
	);
};

export default Open;
