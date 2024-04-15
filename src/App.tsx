import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { SidebarItems } from "./components/SidebarItems";
import { SidebarLayout } from "./layouts/SidebarLayout";
import Admin from './pages/admin/Admin';
import ContractHistory from "./pages/contracthistory/ContractHistory";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/login/LoginPage";
import Organization from "./pages/organizations/Organizations";
import Verify from "./pages/verify/VerifyPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/dashboard">
            <SidebarLayout
              sidebarContent={<SidebarItems />}
              mainContent={<Dashboard />}
            />
          </Route>
          <Route exact path="/admin">
            <SidebarLayout
              sidebarContent={<SidebarItems />}
              mainContent={<Admin />}
            />
          </Route>
          <Route exact path="/organizations">
            <SidebarLayout
              sidebarContent={<SidebarItems />}
              mainContent={<Organization />}
            />
          </Route>
          <Route exact path="/contracthistory">
            <SidebarLayout
              sidebarContent={<SidebarItems />}
              mainContent={<ContractHistory />}
            />
          </Route>
          <Route exact path="/verify">
            <SidebarLayout
              sidebarContent={<SidebarItems />}
              mainContent={<Verify />}
            />
          </Route>
          <Route path="*" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
