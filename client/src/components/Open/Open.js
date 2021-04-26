import React, { Suspense } from 'react'
import Title from './Title/Title'
// import ByLine from "./Byline"

const ByLine = React.lazy(() => import('./Byline/ByLine'));



const Open = () => {
    return (
        <div>
            <Title/>
            <Suspense fallback={<div>A long time ago, in a galaxy far, far away...</div>}>
                <ByLine/>
            </Suspense>
            <div>
            <a href="/profile"><button>Profile</button></a><br />
            <a href="/Holodex"><button>Holodex</button></a>
            </div>
        </div>
    )
}

export default Open
