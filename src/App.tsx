import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { SidebarLayout } from "./layouts/SidebarLayout";
import { SidebarItems } from "./components/SidebarItems";


function App() {

  return (
    <>
      <Router>
        <div>
          <nav className="flex items-center gap-3 flex-wrap p-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Switch>
            <Route exact path="/about">
              <SidebarLayout
                sidebarContent={
                  <SidebarItems />
                }
                mainContent={<div>About..</div>}
              />
            </Route>
            <Route exact path="/topics">
              <SidebarLayout
                sidebarContent={
                  <SidebarItems />
                }
                mainContent={<div>Topics..</div>}
              />
            </Route>
            <Route exact path="/">
              <SidebarLayout
                sidebarContent={
                  <SidebarItems />
                }
                mainContent={<div>Home..</div>}
              />
            </Route>
          </Switch>
        </div>


      </Router>
    </>
  )
}

export default App
