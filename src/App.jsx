import React from 'react'
import AppHeader from './components/layout/header'
import AppFooter from './components/layout/footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <div className="h-screen flex flex-col ">
      <AppHeader />
      <main className="mb-auto w-[85%] flex-grow mx-auto py-5">
        <Outlet />
      </main>
      <AppFooter />
    </div>
    </div>
  )
}

export default App
