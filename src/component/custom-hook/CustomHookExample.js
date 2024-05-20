import CounterOne from "./CounterOne"
import CounterTwo from "./CounterTwo"
import UseForm from "./UserForm"

function CustomHookExample() {

    /**
     * Custom hooks is a powerful and flexible way to share and reuse statefull logic across multiple components.
     * They are regular java script function that start with the word use and can contain other built-in hooks or
     * even other custom hooks.
     */

    return (
            <div>
                <CounterOne/><br/>
                <CounterTwo/><br/>
                <UseForm/>
            </div>
        )
}

export default CustomHookExample