import React from "react"
import { Route } from "react-router-dom"
import DogOwnerList from "./DogOwner/DogOwnerList"
import {DogOwnerProvider } from "./DogOwner/DogOwnerProvider"
import { DogProvider } from "./dog/DogProvider"
import DogList from "./dog/DogList"
import DogForm from "./dog/DogForm"
import DogDetails from "./dog/DogDetails"
import DogOwnerDetails from "./DogOwner/DogOwnerDetails"


export default (props) => {
    return (
        <>
        <DogOwnerProvider>

                        <Route exact path="/dogowners" render={
                            props => <DogOwnerList {...props} />
                        } />

                <Route path="/dogowner/:DogOwnerId(\d+)" render={
                            props => <DogOwnerDetails {...props} />
                        } />

            </DogOwnerProvider>
            
            <DogOwnerProvider>
                <DogProvider>
                        <Route exact path="/dogs" render={
                            props => <DogList {...props} />
                        } />

<Route path="/dog/:DogId(\d+)" render={
                            props => <DogDetails {...props} />
                        } />

                <Route path="/dog/create" render={
                        props => <DogForm {...props} />
                    } />
                </DogProvider>
            </DogOwnerProvider>
        </>
    )
}