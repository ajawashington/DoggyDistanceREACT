import React, { useContext } from "react"
import { DogContext } from "./DogProvider"
import Dog from "./Dog"


export default (props , history) => {
    const { dogs, deleteDog } = useContext(DogContext)




    return (
        <>
            <h1>Dogs</h1>
            <div className="dogs">

                {
                    dogs.map(dog => {
                        return <Dog key={dog.id} dog={dog} owner={dog.OwnerId} {...props} />
                    })
                }
          
          
        <button onClick={() => props.history.push("/dog/create")}>
            Add Dog
        </button>
            </div>  
        </>
    )
    }