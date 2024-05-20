import React from "react"

function CounterChange({countVal}) {
    console.log('Count Increased : ', countVal)
    return (
        <div>
            Count: {countVal}
        </div>
    )
}

export default React.memo(CounterChange)