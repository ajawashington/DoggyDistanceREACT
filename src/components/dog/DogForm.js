import React, { useContext, useState, useEffect, useRef  } from "./node_modules/react"
import { DogContext } from "./DogProvider"
import { DogOwnerContext } from "../DogOwner/DogOwnerProvider"
// import "./Dogs.css"

export default props => {
  
    const { addDog, updateDog, dogs } = useContext(DogContext)
    const { dogOwners } = useContext(DogOwnerContext)
    const [dog, setDog] = useState({})
    const dogOwner = useRef(0)
  
    const editMode = props.match.params.hasOwnProperty("DogId")

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newDog = Object.assign({}, dog)
        newDog[evt.target.dogName] = evt.target.value
        setDog(newDog)

    }

    const setDefaults = () => {
        if (editMode) {
          
            const DogId = parseInt(props.match.params.DogId)
            const selectedDog = dogs.find(a => a.id === DogId) || {}
            setDog(selectedDog)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [dogs, dogOwners])

    const constructNewDog = () => {

        const dogOwnerId = parseInt(dogOwner.current.value)
        
        if (editMode) {
            updateDog({
                id: dog.id,
                dogName: dog.DogName,
                breed: dog.Breed,
                notes: dog.Notes,
                dogOwnerId: dogOwnerId
            })
                .then(() => props.history.push("/dogs"))
        } else {
            addDog({
                dogName: dog.DogName,
                breed: dog.Breed,
                notes: dog.Notes,
                dogOwnerId: dogOwnerId
            })
            .then(() => props.history.push("/dogs"))
    
        }
        }
    
        return (
            <form className="dogForm">
                <h2 className="dogForm__title">{editMode ? "EDIT DOG" : "NEW DOG"}</h2>
                <fieldset>
    
                <div className="form-group">
                    <label htmlFor="issue">Dog Name</label>
                    <input
                        type="text"
                        id="issue"
                        name="issue"
                        defaultValue={dog.DogName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Dog Name"
                        proptype="varchar"
                        onChange={handleControlledInputChange}
                        />
                </div>
                        </fieldset>
                        <fieldset>
                            
                <div className="form-group">
                    <label htmlFor="amount">Breed</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        defaultValue={dog.Breed}
                        required
                        className="form-control"
                        proptype="varchar"
                        placeholder="Breed"
                        onChange={handleControlledInputChange}
                        />
                </div>
                
                        </fieldset>
                        <fieldset>
                            
                            <div className="form-group">
                                <label htmlFor="item">Notes</label>
                                <input
                                    type="text"
                                    id="item"
                                    name="item"
                                    defaultValue={dog.Notes}
                                    required
                                    className="form-control"
                                    proptype="varchar"
                                    placeholder="Notes"
                                    onChange={handleControlledInputChange}
                                    />
                            </div>
                            
                                    </fieldset>
                        <fieldset>
                    <div className="form-group">
                        <label htmlFor="business">Dog Owner </label>
                        <select
                            value={dog.DogOwnerId}
                            name="businessId"
                            ref={dogOwner}
                            className="form-control"
                            onChange={handleControlledInputChange}
                        >
                            <option value="0">Select a Dog Owner</option>
                            {dogOwners.map(b => (
                                <option key={b.id} value={b.id}>
                                    {b.ownerName}
                                </option>
                                  
                            ))}
                        </select>
                    </div>
                </fieldset>
                        
                <button type="submit" onClick={evt => 
                        {evt.preventDefault() 
                        constructNewDog()
                        }}
                    className="btn btn-primary"> {editMode ? "Edit Dog": "Add Dog"} </button>
            </form>
        )
}