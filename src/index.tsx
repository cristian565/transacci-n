import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './routers/AppRouter';
import {keycloak} from "./Keycloak";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const eventLogger = (event: unknown, error: unknown) => {
  console.log("aqui el evento",event," error:",error)
}

const tokenLogger = (tokens: unknown) => {
  console.log(tokens,"token")
}


root.render(
  
  <ReactKeycloakProvider 
    initOptions={{checkLoginIframe: false}}
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}  
    >
      <AppRouter/>
    </ReactKeycloakProvider> 
);

