import Keycloak from "keycloak-js";

const keycloak =new Keycloak({
    realm: "bizzhub",
    url: "http://192.168.1.206/auth/",
    clientId: "webapp-client"

    // url: "http://localhost:8000/auth/",
    // realm: "keycloak-react-auth",
    // clientId: "React-auth"

});

export default keycloak; 
