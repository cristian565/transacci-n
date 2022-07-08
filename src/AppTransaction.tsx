import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { Home } from './page/Home'
import { Login } from './components/Login'
import { accesUserLogin } from './hooks/accesUserLogin'
import { AppRouter } from './/routers/AppRouter'
/* import { AppRouter } from './routers/AppRouter'
 */
export const AppTransaction = () => {

  const [acceState, setAcceState] = useState<boolean>(false)
  
  return (
    <>
          {/* <Transition
            show={!acceState}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
          <Login accesUser={setAcceState}/>
          </Transition>

          <Transition
            show={acceState}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
          <Home/>
          </Transition> */}


    <AppRouter/>
    </>
  )
}
