import React, { useContext, useRef } from "react"
import { DogContext } from "./DogProvider"
import { DogOwnerContext } from "../DogOwner/DogOwnerProvider"

export default props => {
    const { DogOwners } = useContext(DogOwnerContext)
    const { addDog } = useContext(DogContext)
    const dogName = useRef("")
    const breed = useRef("")
    const notes = useRef("")
    const DogOwner = useRef(0)

    const constructNewDog = () => {
        const DogOwnerId = parseInt(DogOwner.current.value)


        if (DogOwnerId === 0) {
            window.alert("Please select a Dog Owner")
        } else {
            addDog({
                dogName: dogName.current.value,
                breed: breed.current.value,
                DogOwnerId: DogOwnerId,
                notes: notes.current.value,
            })
            .then(() => props.history.push("/dogs"))
        }
    }

    return (
        <form className="DogForm">
            <h2 className="DogForm__title">Walk Dog</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="DogName">Dog name: </label>
                    <input
                        type="text"
                        name="Dog Name"
                        ref={dogName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Dog name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="DogBreed">Dog breed: </label>
                    <input
                        type="text"
                        name="DogBreed"
                        ref={breed}
                        required
                        className="form-control"
                        placeholder="Dog breed"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="DogBreed">Dog breed: </label>
                    <input
                        type="text"
                        name="DogNotes"
                        ref={notes}
                        required
                        className="form-control"
                        placeholder="Dog Notes"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="DogOwner">DogOwner: </label>
                    <select
                        defaultValue=""
                        name="DogOwner"
                        ref={DogOwner}
                        className="form-control"
                    >
                        <option value="0">Select a DogOwner</option>
                        {DogOwners.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault()
                        constructNewDog()
                    }
                }
                className="btn btn-primary">
                Make Walk Reservation
            </button>
        </form>
    )
}