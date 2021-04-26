// import React, { Component } from "react";
// import API from "../utils/Api";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// // import Alert from "../components/Alert";

// class Search extends Component {
//   state = {
//     search: "",
//     planets: [],
//     characters: [],
//     results: [],
//     error: ""
//   };

//   // When the component mounts, get a list of all available base breeds and update this.state.breeds
//   componentDidMount() {
//     API.getPlanets()
//       .then(res => this.setState({ planets: res.data }))
//       .catch(err => console.log(err));
//   }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getPlanets(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error('Impossible. Perhaps the archives are incomplete...');
//         }
//         this.setState({ results: res.data.name, error: "" });
//         console.log(res.data)
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By Planet!</h1>
//           {/* <Alert
//             type="danger"
//             style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
//           >
//             {this.state.error}
//           </Alert> */}
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             planets={this.state.planets}
//           />
//           <SearchResults results={this.state.results} />
//         </Container>
//       </div>
//     );
//   }
// }

// export default Search;