import Keycloak from "keycloak-js";

const keycloak =new Keycloak({
    realm: "bizzhub",
    url: "http://192.168.1.206/auth/",
    clientId: "webapp-client",
    PROXY_ADDRESS_FORWARDING: true,

});

export default keycloak; 
