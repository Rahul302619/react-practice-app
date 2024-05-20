import { useEffect, useState } from "react";

function DocumentHeading() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    console.log('DocumentHeading rendered');

    /* render use effect conditionally */
    useEffect(() => {
        console.log('Render this only when count changes');
        document.title = `You Clicked : ${count} times`;
    }, [count])

    useEffect(() => {
        console.log('Render this only once');
    }, [])

    return (
        <div>
            <input 
             type="text" 
             value={name} 
             onChange={event => setName(event.target.value)}
             /> 
            <button onClick={() => setCount(preCount => preCount + 1)}>Count : {count}</button>   
        </div>
    )
}

export default DocumentHeading