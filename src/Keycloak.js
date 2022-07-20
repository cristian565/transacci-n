import Keycloak from "keycloak-js";

const keycloak =new Keycloak({
    realm: "bizzhub",
   // url: "http://192.168.1.206/auth/", // para local 
     url: "https://bizzhub-gateway.hardtech.co:8098/auth/auth", // para vercel-produccion
    clientId: "webapp-client",
    PROXY_ADDRESS_FORWARDING: true,
    X_Frame_Options: "SAMEORIGIN"
    // url: "http://localhost:8000/auth/",
    // realm: "keycloak-react-auth",
    // clientId: "React-auth"

});

export default keycloak; 
