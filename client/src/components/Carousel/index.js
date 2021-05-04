import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import LevelThree from '../Planet/Levelthree';
import API from '../../utils/Api';


function Characsel({characters}) {

    return (
        <div>
            {/* <Carousel> */}
                <div>
                {characters ? (
								characters.map((character) => {
									return (
										<LevelThree
											key={character.name}
											name={character.name}
											image={character.image}
											description={character.description}
											birth_year={character.birth_year}
										/>
									);
								})
							)  : (
								<div></div>
							)}
                            {/* <p className="legend">Legend 1</p> */}
                    {/* <img src="assets/images/character_img/Luke_Skywalker.png" /> */}
                    
                </div>
                {/* <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            {/* </Carousel> */}
        </div>
    )
}

// class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// };

export default Characsel;
