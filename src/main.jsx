import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import UseCallback from './Components/useCallback/UseCallback.jsx'
import LazyLoading from './Components/LazyLoadingPractice/LazyLoading.jsx'
import CustomHook from './Components/customHookPractice/CustomHook.jsx'

const About = lazy( () => import('./Components/LazyLoadingPractice/About.jsx'))
const Contact = lazy( () => import('./Components/LazyLoadingPractice/Contact.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='/' element={<App/>}>
       <Route path='/About' element={<About/>}  />
       <Route path='/Contact' element={<Contact/>}  />
       <Route path='/CustomHook' element={<CustomHook/>}  />
       <Route path='/LazyLoading' element={<LazyLoading/>}  />
       <Route path='/UseCallback' element={<UseCallback/>}  />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
