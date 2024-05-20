import CounterOne from "./CounterOne"
import FetchDataReducer from "./FetchDataReducer"
import UseReducerWithUseContextExample from "./with-use-context/UseReducerWithUseContextExample"

function UseReducerExample() {
    return (
        <div>
            {/* useState and useReducer purpose is almost same to store the state of the variable
                useState use for stroing simple state but useReducer use for complex state
                useState use for local state storing whereas useReducer can be use for global with the help of useContext
                useReducer use if some different state are realted to each other for e,g see FetchDataReducer
            */}
            <CounterOne/><br/>
            <UseReducerWithUseContextExample/><br/>
            <FetchDataReducer/>
        </div>
    )
}

export default UseReducerExample