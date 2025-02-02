import React from "react"

function Button({handleClick, children}) {
    console.log('Button Component Rendered for : ', children)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(Button)