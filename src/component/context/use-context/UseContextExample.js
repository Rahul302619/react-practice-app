import { createContext, useEffect, useState } from "react"
import First from "./First"
import axios from "axios"

export const NameUseContext = createContext()
export const AddressUseContext = createContext()
export const PostUseContext = createContext()

function UseContextExmaple() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div>
            <NameUseContext.Provider value={'Rahul Singh'}>
                <AddressUseContext.Provider value={'Jamshedpur, Jharkhand'}>
                    <PostUseContext.Provider value={posts}>
                        <First/>
                    </PostUseContext.Provider>
                </AddressUseContext.Provider>
            </NameUseContext.Provider>
        </div>
    )
}

export default UseContextExmaple