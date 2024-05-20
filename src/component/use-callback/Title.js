import React from "react"

function Tittle() {
    console.log('Title Component Rendered')
    return (
        <div>
            UseCallBack and ReactMemo Example
        </div>
    )
}

/**
 * React.memo is use for performance optimization
 * If parrent component get rendered than React.memo component will only rendered if the change is specific to this component
 * or else it will not rendered
 */

export default React.memo(Tittle)