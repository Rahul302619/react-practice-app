import useInput from "./UseInput"

function UseForm() {
    const [firstName, resetFirstName, bindFirstName] = useInput()
    const [lastName, resetLastName, bindLastName] = useInput()

    const submitForm = event => {
        event.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    /**
     * Here in the input tag we direct use spread opperator for value, onChange, type attribute
     * because the custom hook return object(bindFirstName or bindLastName) exact have same value
     */
    return (
        <div>
            First Name : <input {...bindFirstName}/> <br/>
            Last Name : <input {...bindLastName}/> <br/>
            <button onClick={submitForm}>Submit</button>
        </div>
    )
}

export default UseForm