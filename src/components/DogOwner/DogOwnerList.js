import React, { useContext } from "react"
import { DogOwnerContext } from "./DogOwnerProvider"
import DogOwner from "./DogOwner"


export default (props) => {
    const { dogOwners } = useContext(DogOwnerContext)

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
        </>
    )
}
