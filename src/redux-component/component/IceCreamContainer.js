import { useDispatch, useSelector } from "react-redux"
import { buyIceCream } from "../redux/IceCreamReducer"

export function IceCreamContainer() {
    const noOfIceCream = useSelector(state => state.iceCream.noOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number Of IceCreams: {noOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}