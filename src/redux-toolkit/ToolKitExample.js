import { Provider } from "react-redux";
import { toolKitStore } from "./ToolKitStore";
import CounterToolKit from "./CounterToolKit";

function ToolKitExample() {

    return (
        <Provider store={toolKitStore}>
            <CounterToolKit/>
        </Provider>
    )
}

export default ToolKitExample