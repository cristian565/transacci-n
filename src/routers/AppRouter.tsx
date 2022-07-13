import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
// import { Details } from "../components/Details";
import { Home } from "../page/Home";
// import { ReactKeycloakProvider } from "@react-keycloak/web";
// import keycloak from "../Keycloak";
import { Provider } from "react-redux";
// import { Login } from "../components/Login";
import { PrivateRouter } from "./PrivateRouter";
import { RenderOnAnonymous } from "../components/RenderOnAnonymous";

// import { HomePage } from '../components/testRoutes/home';
import { LandingPage } from '../components/testRoutes/landing';
import { PrivateRoute } from '../components/testRoutes/privateRoute';
import { useKeycloak } from '@react-keycloak/web';

export const AppRouter = () => {
  
  const { keycloak, initialized } = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  }
  
  return (
    <Router>
      <Redirect from="/" to="/home" />
      <PrivateRoute path="/home" component={Home} />
      <Route path="/login" component={LandingPage} />
    </Router>
  );
};
