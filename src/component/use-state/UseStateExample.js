import ArrayExample from "./ArrayExample"
import Counter from "./Counter"
import UseStateObj from "./ObjectExample"

function UseStateExample() {
    return (
        <div>
            {/* use state is use to set the state of the variable */}
            <Counter/><br/>
            <UseStateObj/><br/>
            <ArrayExample/>
        </div>
    )
}

export default UseStateExample