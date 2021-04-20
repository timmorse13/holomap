import React, { Component } from "react";
import API from "../utils/Api"
import Characters from "../components/Characters";
import Planets from "../components/Planets";

class Home extends Component {
  state = {
    char: [],
    plan: [],
    charID: "",
    message: "This works"
  };
  
  componentDidMount() {
    this.getCharacters()
    this.getPlanets()
  };

  getCharacters = () => {
    API.getCharacters()
    .then(res => {
      console.log(res)
      this.setState({
        char: res.data
      })
    })
      .catch(() => 
      this.setState({
        char: [],
        message: "No work"
      })
      );
  };

  getPlanets = () => {
    API.getPlanets()
    .then(res => {
      this.setState({
        plan: res.data
      })
    })
    .catch(() => 
    this.setState({
      plan: [],
      message: "No planet"
    })
    );
  };



  render() {
    return (
      <div>
        {this.state.char.map(character => {
          return <Characters 
          name={character.name}
          gender={character.gender}
          skin_color={character.skin_color}
          eye_color={character.eye_color}
          hair_color={character.chair_color}
          description={character.description}
          image={character.image}
        
          />
          
        })}
        <p>
          {this.state.plan.map(planet => {
            return <Planets 
            name={planet.name} 
            climate={planet.climate} 
            surface_water={planet.surface_water} 
            diameter={planet.diameter} 
            rotation_period={planet.rotation_period} 
            terrain={planet.terrain} 
            gravity={planet.gravity} 
            orbital_period={planet.orbital_period} 
            population={planet.population} 
            description={planet.description}
            planet_info={planet.planet_info} 
            img={planet.img}
            
            />
          })}
        </p>

      </div>
                
      
    )
  }



}

export default Home;
