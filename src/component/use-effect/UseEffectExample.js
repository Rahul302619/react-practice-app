import DocumentHeading from "./DocumentHeading"
import FetchData from "./FetchData"
import RenderComponentCondtionally from "./RenderComponentConditionally"

function UseEffectExample() {
    return (
        <div>
            {/* use effect get call or render when component get render, it is basicaly use to cause side effect */}
            <DocumentHeading/><br/>
            <RenderComponentCondtionally/><br/>
            <FetchData/>
        </div>
    )
}

export default UseEffectExample