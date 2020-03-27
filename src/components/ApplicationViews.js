import React from "react"
import { Route } from "react-router-dom"
import DogOwnerList from "./DogOwner/DogOwnerList"
import DogList from "./dog/DogList"
import DogForm from "./dog/DogForm"
import DogDetails from "./dog/DogDetails"
import DogOwnerDetails from "./DogOwner/DogOwnerDetails"
import ProviderProvider from "./ProviderProvider"


export default (props) => {
    return (
        <>
    <ProviderProvider>


<Route exact path="/dogowners" render={props => <DogOwnerList {...props} />} />
<Route path="/dogowner/:DogOwnerId(\d+)" render={props => <DogOwnerDetails {...props} />} />
<Route exact path="/dogs" render={props => <DogList {...props} />} />
<Route path="/dog/:DogId(\d+)" render={props => <DogDetails {...props} />} />
<Route path="/edit/:DogId(\d+)" render={props => <DogForm {...props} />} />
<Route path="/dog/create"render={props => <DogForm {...props} />} />

            </ProviderProvider>
        </>
    )
}