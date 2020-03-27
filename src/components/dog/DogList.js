import React, { useContext } from "react"
import { DogContext } from "./DogProvider"
import Dog from "./Dog"


export default (props) => {
    const { dogs } = useContext(DogContext)

    return (
        <>
            <h1>Dogs</h1>
            <div className="dogs">

                {
                    dogs.map(dog => {
                        return <Dog key={dog.id} dog={dog} owner={dog.OwnerId} />
                    })
                }
            </div>
        </>
    )
}
