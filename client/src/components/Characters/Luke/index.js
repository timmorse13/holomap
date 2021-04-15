import React, { useState, useEffect } from 'react';

// function Luke() {
//     const  [luke, setLuke] = useState([]);

//     useEffect(() => {
//         async function getLS() {
//             let res = await fetch('https://swapi.dev/api/people/1');
//             let data = await res.json();
//             setLuke(data.results);
//         }
//         getLS();
//     }, []);
//     console.log('data', luke) 
//     return (
//         <div className = "Luke">
//             Luke
//         </div>
//     );
// }

function Luke() {
    fetch('https://swapi.dev/api/people/1', (req, res) => {
        console.log(res.json());
    })
}
export default Luke;