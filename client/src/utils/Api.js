import axios from "axios";

export default {

  getCharacters: function() {
    return axios.get("/api/character");
  },
  getCharacter: function(id) {
    return axios.get("/api/character/" + id);
  },
  // Gets all posts
  getPlanets: function() {
    return axios.get("/api/planet");
  },
  // Gets the post with the given id
  getPlanet: function(name) {
    return axios.get("/api/planet/" + name);
  },

  getUsers: function() {
    return axios.get("/api/users");
  },

  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },








//   // Deletes the post with the given id
//   deletePost: function(id) {
//     return axios.delete("/api/posts/" + id);
//   },
//   // Saves a post to the database
//   savePost: function(postData) {
//     return axios.post("/api/posts", postData);
//   }
};
