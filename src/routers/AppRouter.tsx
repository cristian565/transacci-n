import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Home } from "../page/Home";
import { PrivateRoute } from './PrivateRouter';
import { useKeycloak } from '@react-keycloak/web';
import { Login } from "../components/Login";
import { imagenes } from "../assets/imagenes";
import { useState } from "react";

export const AppRouter = () => {
  
  const { keycloak, initialized } = useKeycloak() 
  const [first, setfirst] = useState<number>(0) 

  const sect=setInterval(() => {
  
    if(first===0){
      console.log("cronometo")
      console.log(first)
      setfirst(first+2)
    }else{
      setfirst(first-1) 
    }
    
  }, 30000);  
  // setInterval(() => {
  //   keycloak.updateToken(62).then((refreshed)=>{
  //     if (!refreshed) {
  //       keycloak.logout()
  //     } 
  //     if(refreshed){console.log("refres correcto")}
  //   }).catch(function() {
  //     keycloak.logout()
  //   });
  // }, 60000);
 

  if (!initialized) {
    return (
      <div className="h-screen flex flex-col justify-center">
        <div className=" flex justify-center">
          <img
            className="h-full w-1/2 bg-white-wompi animate-pulse"
            src={imagenes["BELLAPIEL"]}
            alt="logoBellaPiel"
          />
        </div>
      </div>
    )
  }
  
  return (
    <Router>
      <Redirect from="/" to="/home" />
      <PrivateRoute path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
};
