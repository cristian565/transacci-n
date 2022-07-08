import { useKeycloak } from "@react-keycloak/web";
/*import{ UserService }from "../services/UserService"

 export const PrivateRouter = ({ children}:any) => {
 
 return UserService.isLoggedIn() ? children : null;
}; */

export const PrivateRouter = ({ children }:any) => {
    const { keycloak, initialized } = useKeycloak(); 

    return keycloak.authenticated ? children : null;
};
