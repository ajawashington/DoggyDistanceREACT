import React, { useContext } from "react"
import { DogOwnerContext } from "../DogOwner/DogOwnerProvider"

export default (props) => {
    const { dogOwners } = useContext(DogOwnerContext)

    const chosenDogOwnerId = parseInt(props.match.params.DogOwnerId, 10)

    const dogOwner = dogOwners.find(a => a.id === chosenDogOwnerId) || {}


    return (
        <section className="Dog">
            <h3 className="Dog__name">{dogOwner.ownerName}</h3>
            <div className="Dog__breed">Address: {dogOwner.ownerAddress}</div>
        </section>
    )
}