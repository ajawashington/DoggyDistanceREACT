import React, { useContext, useState} from "react"
import { Link } from "react-router-dom"
import { DogContext } from "./DogProvider"


export default ({ dog, history }) => {

    const {deleteDog } = useContext(DogContext)


        
        return(
        
            <section className="dog">
        <h3 className="dog__name">
           Name: <Link to={`/dog/${dog.id}`}>
           { dog.dogName }
            </Link>
            </h3>
            <div className="dog__breed">Breed : { dog.breed }</div>
            <button onClick={() => {
                
                 history.push(`/edit/${dog.id}`)
                 
                }}>Edit</button>
                
                <button onClick={
                    () => {
                        
                        deleteDog(dog)
                        
                 }
                 
                }>
                Delete
                </button>
                
                </section>
                
                
                
                
                )
            

    

            
            
}