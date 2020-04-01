import React, { useContext } from "react"
import { DogOwnerContext } from "./DogOwnerProvider"
import DogOwner from "./DogOwner"
import { DogContext } from "../dog/DogProvider"
import Dog from "../dog/Dog"

export default (props) => {
    const { dogOwners } = useContext(DogOwnerContext)
    const { dogs } = useContext(DogContext)

    const chosenDogOwnerId = parseInt(props.match.params.DogOwnerId, 10)

    const dogsByOwner = dogs.filter ( d => d.DogOwnerId === chosenDogOwnerId)
    return (
        <>
            <h1>Dog Owners</h1>
            <div className="DogOwners">

                {
                    dogOwners.map(dogOwner => {
                        return <DogOwner key={dogOwner.id} dogOwner={dogOwner} />
                    })
                }
            </div>
            <div>
                {
                    dogsByOwner.map(dog => {
                        return <Dog key={dog.id} dog={dog} {...props} /> 
                    } )
                }
            </div>
        </>
    )
}
