import React from "react"
import { Link } from "react-router-dom"

export default ({ dogOwner }) => (
    <section className="dog">
        <h3 className="dog__name">
            <Link to={`/dogowner/${dogOwner.id}`}>
                { dogOwner.ownerName }
            </Link>
        </h3>
    </section>
)