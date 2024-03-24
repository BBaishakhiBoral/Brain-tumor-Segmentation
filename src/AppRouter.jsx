import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/home'
import AboutPage from './components/pages/about'
import ContactPage from './components/pages/contact'
import App from './App'
import Image2DSegmentationPage from './components/pages/2DImageSegmentation'
import Image3DSegmentationPage from './components/pages/3DImageSegmentation'
import Image3DReconstructionPage from './components/pages/3DImageReconstruction'
import ErrorPage from './components/pages/Error'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element ={<App/>}>
       <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/2dImageSegmentation' element={<Image2DSegmentationPage/>} />
        <Route path='/3dImageSegmentation' element={<Image3DSegmentationPage/>} />
        <Route path='/3dImageReconstruction' element={<Image3DReconstructionPage/>} />
        <Route path='*' element={<ErrorPage/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
