import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom"
import Home from "./Home"
import About from "./About"
import NavBar from "./NavBar"
import Post from "./Post"

function RouterExample() {
  // For reading value as query param
  const query = new URLSearchParams(useLocation().search);
  const empId = query.get('id');
  const history = useHistory();

  <Link to="/employee?id=1">Employee 1</Link>
  history.push(`/employee?id=1`);

  // For reading value as path variable
  const { id } = useParams();
  const history = useHistory();

  <Link to="/employee/1">Employee 1</Link>
  history.push(`/employee/${empId}`);

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