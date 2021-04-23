import React, { Component } from "react";
import API from "../utils/Api";

class Search extends Component {
    state = {
        search: "",
        characters: [],
        planets: [],
        results: [],
        error: ""
    }
};

