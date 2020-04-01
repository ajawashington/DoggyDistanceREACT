import React, { useContext } from "./node_modules/react"
import { DogOwnerContext } from "../DogOwner/DogOwnerProvider"
import { DogContext } from "./DogProvider"

export default (props) => {
    const { dogs } = useContext(DogContext)
    const { dogOwners } = useContext(DogOwnerContext)

    const chosenDogId = parseInt(props.match.params.DogId, 10)

    const dog = dogs.find(a => a.id === chosenDogId) || {}
    const dogOwner = dogOwners.find(l => l.id === dog.DogOwnerId) || {}

    return (
        <section className="Dog">
            <h3 className="Dog__name">Dog Name: {dog.dogName}</h3>
            <div className="Dog__breed">Breed: {dog.breed}</div>
            <div className="Dog__DogOwner">Dog Owner: {dogOwner.ownerName}</div>
        </section>
    )
}