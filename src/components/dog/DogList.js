import React, { useContext } from "./node_modules/react"
import { DogContext } from "./DogProvider"
import Dog from "./Dog"


export default (props , history) => {
    const { dogs} = useContext(DogContext)




    return (
        <>
     
           <h1>Dogs</h1>
    
        <button onClick={() => props.history.push("/dog/create")}>
            Add Dog
        </button>
            <div className="Dogs">

                {
                    dogs.map(dog => {
                        return <Dog key={dog.id} dog={dog} owner={dog.dogOwnerId} {...props} />
                    })
                }
          
          
            </div>  
        </>
    )
    }