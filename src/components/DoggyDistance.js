import React from "react"
import { Route  } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./Nav/NavBar"
import "./DoggyDistances.css"



export default () => (
    <>
        
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                
    </>
)