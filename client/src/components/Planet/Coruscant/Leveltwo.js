// import React, { useState, useEffect } from "react";
// import{ useParams } from "react-router-dom";
// import API from "../utils/Api";
// import Coruscant from "../components/Planet/Coruscant";

// function Leveltwo() {
//     const { name } = useParams()
//     const [planet, setPlanet] = useState([])

        
    

//     useEffect(() => {
//         getPlanet()
//         console.log('where u at')
//     },[])
    
    
//     const getPlanet = () => {
//         console.log(name)
//         API.getPlanet(name)
//         .then(res =>  {
//             console.log(res)
//             setPlanet(res.data)
//         })
//         .catch(() => setPlanet([])

//         );
//     };

//         return (
//             <div>
//                 hello planet
//               </div>

//         )
    

// }

// export default Leveltwo;