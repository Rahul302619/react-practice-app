import { useState } from "react"
import CleanUp from "./CleanUp"

function RenderComponentCondtionally() {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggel Component</button><br/>   
            {toggle && <CleanUp/>}
        </div>
    )
}

export default RenderComponentCondtionally