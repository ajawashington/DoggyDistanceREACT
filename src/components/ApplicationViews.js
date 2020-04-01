import React from "react"
import { Route } from "react-router-dom"
import DogOwnerList from "./DogOwner/DogOwnerList"
import DogList from "./dog/DogList"
import DogForm from "./dog/DogForm"
import DogDetails from "./dog/DogDetails"
import DogOwnerDetails from "./DogOwner/DogOwnerDetails"
import {DogProvider} from "./dog/DogProvider"
import {DogOwnerProvider} from "./DogOwner/DogOwnerProvider"


export default (props) => {
    return (
        <>
        <DogProvider>
    <DogOwnerProvider>



<Route exact path="/dogowner" render={props => <DogOwnerList {...props} />} />
<Route path="/dogowner/:DogOwnerId(\d+)" render={props => <DogOwnerDetails {...props} />} />
<Route exact path="/dog" render={props => <DogList {...props} />} />
<Route path="/dog/:DogId(\d+)" render={props => <DogDetails {...props} />} />
<Route path="/dog/edit/:DogId(\d+)" render={props => <DogForm {...props} />} />
<Route path="/dog/create"render={props => <DogForm {...props} />} />

    </DogOwnerProvider>
</DogProvider>
       
        </>
    )
}