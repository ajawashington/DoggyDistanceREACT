import React, { useState, useEffect } from "./node_modules/react"

/*
    The context is imported and used by individual components
    that need data
*/
export const DogContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const DogProvider = (props) => {
    const [dogs, setDogs] = useState([])

    const getDogs = () => {
        return fetch("http://localhost:5000/api/dog")
            .then(res => res.json())
            .then(setDogs)
    }

    const addDog = dog => {
        return fetch("http://localhost:5000/api/dog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dog)
        })
            .then(getDogs)

    }
    const deleteDog = dog => {
        return fetch(`http://localhost:5000/api/dog/${dog.id}`, {
            method: "DELETE",
        })
            .then(getDogs)
    }

    const updateDog = dog => {
        return fetch(`http://localhost:5000/api/dog/${dog.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dog)
        })
            .then(getDogs)
    }
    useEffect(() => {
        getDogs()
    }, [])

    useEffect(() => {
        console.log("****  Dog APPLICATION STATE CHANGED  ****")
    }, [dogs])

    return (
        <DogContext.Provider value={{
            dogs, addDog, deleteDog, updateDog
        }}>
            {props.children}
        </DogContext.Provider>
    )
}