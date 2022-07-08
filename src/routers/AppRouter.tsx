import {Routes,Route, BrowserRouter,Link} from 'react-router-dom'
import { Details } from '../components/Details'
import { Home } from '../page/Home'
 import { ReactKeycloakProvider } from "@react-keycloak/web"; 
 import keycloak from "../Keycloak"; 
 import { Provider } from "react-redux";
import { Login } from '../components/Login'
import { PrivateRouter} from './PrivateRouter'


export const AppRouter = () => {
  return (
     
   //  <Provider store={store}> 
    <BrowserRouter>      
        <Routes>
        <Route path='/'
         element={<Login/>}/>
            <Route path='/secured' 
            element={
            <PrivateRouter>
              <Home/>
            </PrivateRouter>}>
            </Route>
            {/* <Route path='/Home' element={<Home/>}></Route> */}
        </Routes>
    
    </BrowserRouter>
//</Provider> */}
  
  )
}
