import { useState } from "react";

function UseStateObj() {
    const [name, setName] = useState({firstName: '', lastName: ''});
    
    return (
        <div>
             <input 
             type="text" 
             value={name.firstName} 
             onChange={event => setName({...name, firstName: event.target.value})}
             /> 

             <input 
             type="text" 
             value={name.lastName} 
             onChange={event => setName({...name, lastName: event.target.value})}
             /> 

            <input 
             type="text" 
             value={name.dob} 
             onChange={event => setName({...name, dob: event.target.value})}
             /> 

             <h2>First Name: {name.firstName}</h2>  
             <h2>Last Name: {name.lastName}</h2>  
             <h2>DOB: {name.dob}</h2>  
        </div>
    )
}

export default UseStateObj