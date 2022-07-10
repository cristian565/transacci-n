import { useKeycloak } from "@react-keycloak/web";

export const RenderOnAnonymous = ({ children }:any) =>{

    const { keycloak, initialized } = useKeycloak(); 
    

  return (!keycloak.token) ? children : null;
}

