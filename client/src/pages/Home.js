import React, { Component } from "react";
import API from "../utils/Api"
import Characters from "../components/Characters";

class Home extends Component {
  state = {
    char: [],
    charID: "",
    message: "This works"
  };
  
  componentDidMount() {
    console.log("Tim")
    this.getCharacters()
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
        
          />
          
        })}
          
      {this.state.message}
      
      
      </div>
    )
  }



}

export default Home;
