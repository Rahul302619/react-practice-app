import FocusInput from "./FocusInput";
import HookTimer from "./HookTimer";

function UseRefExample() {

    /**
     * UseRef is react hook thats provides a way to create mutable refrences to DOM elements or any other
     * mutable values that persists across renders. You should use useRef when you need to interact with the DOM,
     * manage mutable state without causing re-renders, or stores values that don't cause rendering of your component.
     */
    return (
        <div>
            <FocusInput/><br/>
            <HookTimer/>
        </div>
    )
}

export default UseRefExample