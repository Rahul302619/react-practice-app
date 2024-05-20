import { Provider } from "react-redux"
import { rootStore } from "../redux/Store"
import { IceCreamContainer } from "./IceCreamContainer"
import { CakeContainer } from "./CakeContainer"

function ReduxExample() {

    /**
     * Redux is use for state management, for state management we can also use (useContext, useReducer react hook)
     * but redux is much simpler to use because we can combine multiple redux reducer together and use it as single store
     */

    return(
        <Provider store={rootStore}>
            <CakeContainer/><br/>
            <IceCreamContainer/>
        </Provider>
    )
}

export default ReduxExample