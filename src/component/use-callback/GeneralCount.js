import React from "react"

function GeneralCount({text, count}) {
    console.log('GeneralCount Component Rendered for : ', text)
    return (
        <div>
            {text} : {count}
        </div>
    )
}

export default React.memo(GeneralCount)