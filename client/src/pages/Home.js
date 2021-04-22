import React, { useState, useEffect, Component } from "react";
import API from "../utils/Api"
import Characters from "../components/Characters";
import Planets from "../components/Planets";
import LevelTwo from "../components/Planet/Leveltwo"
import Planet from "../components/Planet";


function Home() {
  const [planet, setPlanet] = useState([])
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanet()
    // loadPlanets()
  }, [])


  const getPlanet = () => {
    // console.log(name)
    API.getPlanet("Tatooine")
    .then(res =>  {
      setPlanet(res.data)
      
    })
    .catch(() => setPlanet([])

    );
  }

    // const loadPlanets = () => {
    //   API.getPlanets()
    //   .then(res => {
    //     setPlanets(res.data)
    //   })
    //   .catch(() => setPlanets([]))
    // }

    // const handlePlanetClick = () => {
    //   let planetName = this.getAttribute("data-name")
    //   setPlanet(planetName)

    // }




return (
        <div className ="viewport">
        <main className = "One">
          <LevelTwo
          // handlePlanetClick = {handlePlanetClick}
          // onClick={props.handlePlanetClick}
            img={planet.img}
            
            />


            </main>
          <div className = "Two">
            look at dis
          </div>
          <div className ="Three">
            <h3>HI ANTHONY</h3>
            <LevelTwo
            
            name={planet.name}
            diameter={planet.diameter}
            rotation_period={planet.rotation_period} 
            orbital_period={planet.orbital_period} 
            planet_info={planet.planet_info}

            />


  
          </div>
          </div>
  
                  
        
      )










};



// class Home extends Component {
//   state = {
//     char: [],
//     plan: [],
//     charID: "",
//     message: "This works"
//   };
  
  
//   componentDidMount() {
//     this.getCharacters()
//     this.getPlanet()
//   };

//   getCharacters = () => {
//     API.getCharacters()
//     .then(res => {
//       console.log(res)
//       this.setState({
//         char: res.data
//       })
//     })
//       .catch(() => 
//       this.setState({
//         char: [],
//         message: "No work"
//       })
//       );
//   };

//   getPlanet = () => {
//     API.getPlanet("Tatooine")
//     .then(res => {
//       this.setState({
//         plan: res.data
//       })
//     })
//     .catch(() => 
//     this.setState({
//       plan: [],
//       message: "No planet"
//     })
//     );
//   };



//   render() {
//     return (
//       <div className ="viewport">
//       <main className = "One">
//         {this.state.char.map(character => {
//           return <Characters 
//           name={character.name}
//           gender={character.gender}
//           skin_color={character.skin_color}
//           eye_color={character.eye_color}
//           hair_color={character.chair_color}
//           description={character.description}
//           image={character.image}
        
//           />
          
//         })}
//           </main>
//         <div className = "Two">
//           {return plan}
//           {this.state.plan.map(planet => {
//             return <LevelTwo
//             name={planet.name}
//             diameter={planet.diameter}
//             rotation_period={planet.rotation_period} 
//             orbital_period={planet.orbital_period} 
//             planet_info={planet.planet_info}
//             img={planet.img}

//           />
//           })} 
//         </div>
//         <div className ="Three">
//           <h3>HI ANTHONY</h3>

//         </div>
//         </div>

                
      
//     )
//   }



// }

export default Home;
