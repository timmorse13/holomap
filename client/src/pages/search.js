import React from "react";
import { Link, Route } from "react-router-dom";



class Search extends React.Component {

  constructor(props) {
    super (props)
  }
  render() {


  return (

  <div>
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={this.props.handleInputChange}
          value={this.props.searchBreed}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Gif"
          id="search"
        />
        <button onClick={this.props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>

    {this.props.results ? this.props.results.map(character => ( 
      <img src={character.image} /> 
     
      ) ) : (
        <div />
      )}
</div>
  );
}
}
export default Search;