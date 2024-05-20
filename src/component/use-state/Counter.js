import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }
    
    return (
        <div>
             <button onClick={incrementCount}>Count : {count}</button>   
        </div>
    )
}

export default Counter