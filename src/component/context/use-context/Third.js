import { useContext } from "react"
import { AddressUseContext, NameUseContext, PostUseContext } from "./UseContextExample"

function Third() {

    const name = useContext(NameUseContext)
    const address = useContext(AddressUseContext)
    const posts = useContext(PostUseContext)

    return (
        <div>
            Third
            <div>Name: {name}</div>
            <div>Address: {address}</div><br/>
            Post Name :
            <ul>
                { posts.map(post => <li key={post.id}> {post.name} </li>) }
            </ul>
        </div>
    )
}

export default Third