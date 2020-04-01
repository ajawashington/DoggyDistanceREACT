import React, { useContext } from "react"
import { DogOwnerContext } from "../DogOwner/DogOwnerProvider"
import { DogContext } from "../dog/DogProvider"
import Dog from "../dog/Dog"

export default (props) => {
    const { dogOwners } = useContext(DogOwnerContext)
    const { dogs } = useContext(DogContext)

    const chosenDogOwnerId = parseInt(props.match.params.dogOwnerId, 10)

    const dogOwner = dogOwners.find(dogOwner => dogOwner.id === chosenDogOwnerId) || {}
    const dogsByOwner = dogs.filter(dog => dog.id === dog.DogOwnerId )


    return (
        <>
        <section className="Dog">
            <h1 className="Dog__name">{dogOwner.OwnerName}</h1>
            <div className="Dog__breed">Address: {dogOwner.OwnerAddress}</div>
            
    <div>{dogsByOwner.map(dbo => <Dog key={dbo.id} dog={dbo} /> )}</div>
        </section>
    </>
    )
}