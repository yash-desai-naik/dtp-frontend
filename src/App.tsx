import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { SidebarItems } from './components/SidebarItems';
import { SidebarLayout } from './layouts/SidebarLayout';
import Admin from './pages/admin/Admin';
import ContractHistory from './pages/contracthistory/ContractHistory';
import Dashboard from './pages/dashboard/Dashboard';
import LoginPage from './pages/login/LoginPage';
import Organization from './pages/organizations/Organizations';
import { useStore } from './store/useStore';

interface PrivateRouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isLoggedIn = useStore(state => state.isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <SidebarLayout sidebarContent={<SidebarItems />} mainContent={<Component {...props} />} /> : <Redirect to="/login" />
      }
    />
  );
};

function App() {
  const isLoggedIn = useStore(state => state.isLoggedIn);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <LoginPage />}
        </Route>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/organizations" component={Organization} />
        <PrivateRoute exact path="/contracthistory" component={ContractHistory} />
      </Switch>
    </Router>
  );
}

export default App;
