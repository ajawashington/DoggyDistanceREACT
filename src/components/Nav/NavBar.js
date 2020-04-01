import React from "react"
import { Link } from "react-router-dom"
import "../Nav/NavBars.css"


export default (props) => {
    return (
        <ul className="navbar">
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/dogowner">Dog Owners</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/dog">Dogs</Link>
            </li>
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/walker">Walkers</Link>
            </li>         
            <li className="navbar__item">
                <Link className="navbar__link" to="/walk">Walks</Link>
            </li>        
             <li className="navbar__item">
                <Link className="navbar__link" to="/neighborhood">Neighborhoods</Link>
            </li>          */}
        
        </ul>
    )
}