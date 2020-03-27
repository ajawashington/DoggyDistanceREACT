import React from "react"
// import { UserProvider } from "./users/UserProvider"
import { DogOwnerProvider } from "./DogOwner/DogOwnerProvider"
import { DogProvider } from "./dog/DogProvider"

export default (props) => {
    return (
        <>
            {/* <UserProvider> */}
                <DogOwnerProvider>
                                <DogProvider>
                            {props.children}
                                </DogProvider>
                </DogOwnerProvider>
            {/* </UserProvider> */}
        </>
    )
}