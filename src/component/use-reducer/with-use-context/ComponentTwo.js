import { useContext, useEffect } from "react"
import { EmployeeContext } from "./UseReducerWithUseContextExample"

function ComponentTwo() {
    const empContext = useContext(EmployeeContext)

    useEffect(() => {
        console.log('ComponentTwo : ', empContext.empState)
    }, [empContext.empState])

    return (
        <div>
            ComponentTwo <br/>
            Name : {empContext.empState?.name} <br/>
            DOB : {empContext.empState?.dob} <br/>
            Address : {empContext.empState?.address} 
        </div>
    )
}

export default ComponentTwo