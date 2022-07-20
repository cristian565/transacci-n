import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './routers/AppRouter';
import keycloak from "./Keycloak";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const eventLogger = (event: unknown, error: unknown) => {
}

const tokenLogger = (tokens: unknown) => {
}

root.render(
  
  <ReactKeycloakProvider 
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}  
    >
      <AppRouter/>
    </ReactKeycloakProvider> 
);

