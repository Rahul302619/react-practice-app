/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import GeneralCount from "./GeneralCount";
import Tittle from "./Title";
import Button from "./Button";
import CounterChange from "./CounterChange";

function UseCallBackExample() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    const [count, setCount] = useState(0)
    const [day, setDay] = useState(0)

    /**
     * useCallback is primarily used for memozing functions. It helps prevent unnecessary renders of child components 
     * that receive these function as props, It often used when passing functions down to the child components 
     * or as dependecies in the useEffect hook.
     */

    const increamentAge = useCallback(() => {
        setAge(prvAge => prvAge + 1)
    }, [age])

    const increamentSalary = useCallback(() => {
        setSalary(prvSalary => prvSalary + 1000)
    }, [salary])

    const increamentDay = () => {
        setDay(prvSalary => prvSalary + 1)
    }

    return (
        <div>
            <Tittle/>
            <GeneralCount text='Age' count={age}/>
            <Button handleClick={increamentAge}>Increment Age</Button>
            <GeneralCount text='Salary' count={salary}/>
            <Button handleClick={increamentSalary}>Increment Salary</Button>
            <div>React.Memo example-(without it the CounterChange will always render whenever any change in the UseCallBackExample)</div>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <CounterChange countVal={count}/>
            <div>Send function as the prop without callback</div>
            <Button handleClick={increamentDay}>Increment Day</Button>
            <GeneralCount text='Day' count={day}/>
        </div>
    )
}

export default UseCallBackExample