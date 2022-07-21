import Keycloak from "keycloak-js";

export const keycloak =new Keycloak({
    realm: "bizzhub",
   // url: "http://192.168.1.206/auth/", // para local 
     url: "https://identity-management.hardtech.co:8888/auth/", // para vercel-produccion
    clientId: "webapp-client",
    PROXY_ADDRESS_FORWARDING: true,
    X_Frame_Options: "SAMEORIGIN"

});


const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => !!keycloak.token;

const updateToken = (successCallback) =>
keycloak.updateToken(300)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role));

export const UserService = {
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
}

