import React from "react"
import { Link } from "react-router-dom"
import "../Nav/NavBars.css"


export default (props) => {
    return (
        <ul className="navbar">
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/dogowners">Dog Owners</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/dogs">Dogs</Link>
            </li>
        
        </ul>
    )
}