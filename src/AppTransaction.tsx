import { Transition } from '@headlessui/react'
import React from 'react'
import { Login } from './components/Login'
/* import { AppRouter } from './routers/AppRouter'
 */
export const AppTransaction = () => {
  return (
    <>

          <Transition
            show={true}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
          <Login/>
          </Transition>


    {/* <AppRouter/> */}
    </>
  )
}
