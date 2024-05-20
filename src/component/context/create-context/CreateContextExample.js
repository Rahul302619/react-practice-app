import { createContext } from "react"
import One from "./One"
import Two from "./Two"

export const NameContext = createContext()
export const AddressContext = createContext()

function CreateContextExmaple() {
    return (
        <div>
            {/** create context is more verbose to use, It is use to pass data to nested component
             * here we are passing data to component Two but using it in component Three 
            */}
            <NameContext.Provider value={'Rahul Singh'}>
                <One/>
                <AddressContext.Provider value={'Jamshedpur, Jharkhand'}>
                    <Two/>
                </AddressContext.Provider>
            </NameContext.Provider>
        </div>
    )
}

export default CreateContextExmaple