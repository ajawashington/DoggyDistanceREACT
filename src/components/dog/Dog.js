import React from "react"
import { Link } from "react-router-dom"

export default ({ dog }) => (
    <section className="dog">
        <h3 className="dog__name">
            <Link to={`/dog/${dog.id}`}>
                { dog.dogName }
            </Link>
        </h3>
        <div className="dog__breed">{ dog.breed }</div>
    </section>
)