import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom"
import Home from "./Home"
import About from "./About"
import NavBar from "./NavBar"
import Post from "./Post"

function RouterExample() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/post">
                    <Post/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterExample