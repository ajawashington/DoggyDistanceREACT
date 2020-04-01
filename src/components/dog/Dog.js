import React, { useContext, useState} from "./node_modules/react"
import { Link } from "./node_modules/react-router-dom"
import { DogContext } from "./DogProvider"
import "./Dogs.css"


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
        {/* <p>Id: {dog.id}</p> */}
            <button onClick={() => {
                
                 history.push(`/dog/edit/${dog.id}`)
                 
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