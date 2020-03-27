import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const DogOwnerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const DogOwnerProvider = (props) => {
    const [dogOwners, setDogOwners] = useState([])

    const getDogOwners = () => {
        return fetch("http://localhost:5000/api/dogOwner")
            .then(res => res.json())
            .then(setDogOwners)
    }

    const addDogOwner = dogOwner => {
        return fetch("http://localhost:5000/api/dogOwner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dogOwner)
        })
            .then(getDogOwners)

    }
    const deleteDogOwner = dogOwner => {
        return fetch(`http://localhost:5000/dogOwners/${dogOwner.id}`, {
            method: "DELETE",
        })
            .then(getDogOwners)
    }

    const updateDogOwner = dogOwner => {
        return fetch(`http://localhost:5000/dogOwners/${dogOwner.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dogOwner)
        })
            .then(getDogOwners)
    }
    useEffect(() => {
        getDogOwners()
    }, [])

    useEffect(() => {
        console.log("****  DogOwner APPLICATION STATE CHANGED  ****")
    }, [dogOwners])

    return (
        <DogOwnerContext.Provider value={{
            dogOwners, addDogOwner
        }}>
            {props.children}
        </DogOwnerContext.Provider>
    )
}