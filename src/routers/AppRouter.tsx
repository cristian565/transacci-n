import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Details } from "../components/Details";
import { Home } from "../page/Home";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../Keycloak";
import { Provider } from "react-redux";
import { Login } from "../components/Login";
import { PrivateRouter } from "./PrivateRouter";
import { RenderOnAnonymous } from "../components/RenderOnAnonymous";

export const AppRouter = () => {
  return (
    //  <Provider store={store}>
    <BrowserRouter>
      <RenderOnAnonymous>
        <Login />
      </RenderOnAnonymous>
      <PrivateRouter>
        <Home />
      </PrivateRouter>
    </BrowserRouter>
    //</Provider> */}
  );
};
