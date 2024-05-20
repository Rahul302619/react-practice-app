import { useContext, useEffect, useState } from "react"
import { defaultEmployeeDetail } from "./Employee"
import { EmployeeContext } from "./UseReducerWithUseContextExample"

function ComponentOne() {
    const empContext = useContext(EmployeeContext)
    const [employee, setEmployee] = useState(defaultEmployeeDetail)

    useEffect(() => {
        console.log('ComponentOne : ', empContext.empState)
    }, [empContext.empState])

    const dispatchEmployee = () => {
        empContext.empDispatch({
            type: 'UPDATE', 
            employeeDetail: {
                name: employee.name,
                dob: employee.dob,
                address: employee.address
            }
        })
    }

    return (
        <div>
            ComponentOne <br/>
            Name : <input type="text" value={employee.name} onChange={e => setEmployee({...employee, name: e.target.value})}/> <br/>
            DOB : <input type="text" value={employee.dob} onChange={e => setEmployee({...employee, dob: e.target.value})}/> <br/>
            Address : <input type="text" value={employee.address} onChange={e => setEmployee({...employee, address: e.target.value})}/> <br/>
            <button onClick={dispatchEmployee}>Update Employee</button>
        </div>
    )
}

export default ComponentOne