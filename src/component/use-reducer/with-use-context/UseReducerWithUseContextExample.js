import { createContext, useReducer } from "react"
import ComponentOne from "./ComponentOne"
import ComponentTwo from "./ComponentTwo"
import { defaultEmployeeDetail, employeeReducer } from "./Employee"

export const EmployeeContext = createContext()

function UseReducerWithUseContextExample() {
    const [emp, dispatchEmp] = useReducer(employeeReducer, defaultEmployeeDetail)
    return (
        <div>
            <EmployeeContext.Provider value={{empState: emp, empDispatch: dispatchEmp}}>
                <ComponentOne/><br/>
                <ComponentTwo/>
            </EmployeeContext.Provider>
        </div>
    )
}

export default UseReducerWithUseContextExample