import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppTransaction } from './AppTransaction';
/* import { UserService } from './/services/UserService'; */
import { Login } from './components/Login';
import './index.css';
import { AppRouter } from './routers/AppRouter';
import keycloak from "./Keycloak";
/* import { AppRouter } from './routers/AppRouter'; */


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={keycloak}>
  <React.StrictMode>
    <AppRouter/>
   
   </React.StrictMode> 
  </ReactKeycloakProvider> 
);

/* const renderApp = () => ReactDOM.render(<AppRouter/>, document.getElementById("root"));
UserService.initKeycloak(renderApp); */
