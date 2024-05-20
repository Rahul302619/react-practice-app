import { useEffect, useState } from "react"

function CleanUp() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    /** use efect take function as the argument and in the return type is call back funtion
     *  which get executed once component get unmount */
    useEffect(() => {
        console.log('compount mount code');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('compount unmount code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    },[])

    const logMousePosition = e => {
        console.log('mouse position');
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div>
            X: {x}<br/>
            Y: {y}
        </div>
    )

}

export default CleanUp