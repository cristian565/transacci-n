import * as React from 'react'
import { useEffect } from 'react'

import { useKeycloak } from '@react-keycloak/web'

// import { useAxios } from '../utils/hooks'


export const HomePage = () => {
  const { keycloak } = useKeycloak()

  // const axiosInstance = useAxios('http://localhost:5000') // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  // const callApi = useCallback(() => {
  //   !!axiosInstance.current && axiosInstance.current.get('/jwt/decode')
  // }, [axiosInstance])

  useEffect(() => {

    if (keycloak.authenticated) {
    //   console.log(keycloak.tokenParsed.preferred_username)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div>User is {!keycloak?.authenticated ? 'NOT ' : ''} authenticated</div>
      {/* <div>User Name: {keycloak.tokenParsed.preferred_username}</div> */}

      {!!keycloak?.authenticated && (
        <button type="button" onClick={() => {
          alert('Logging out...');
          keycloak.logout();
        }}>
          Logout
        </button>
      )}
    </div>
  )
}
