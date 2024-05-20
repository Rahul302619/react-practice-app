import axios from "axios"
import { useEffect, useState } from "react"

function FetchData() {

    const [posts, setPosts] = useState([])
    const [id, setId] = useState('')
    const [post, setPost] = useState('')

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

    const fetchData = () => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            Post Name :
            <ul>
                { posts.map(post => <li key={post.id}> {post.name} </li>) }
            </ul>
            <input type="text" value={id} onChange={event => setId(event.target.value)}></input>
            <button onClick={fetchData}>Fetch Post</button><br/>
            Post Detail :<br/>
            id : {post.id}<br/>
            name: {post.name}<br/>
            username : {post.username}<br/>
            email : {post.email}<br/>
        </div>
    )
}

export default FetchData