import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import DoggyDistance from './components/DoggyDistance'

ReactDOM.render(
    <Router>

        <DoggyDistance/>
    
    </Router>
    , document.getElementById("root"))