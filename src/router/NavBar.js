import { Link } from "react-router-dom/cjs/react-router-dom.min"

function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;
            <Link to="/post">Post</Link>
        </div>
    )
}

export default NavBar