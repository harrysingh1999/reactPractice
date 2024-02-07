import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const About = lazy( () => import('./LazyLoadingPractice/About.jsx'))
const Contact = lazy( () => import('./LazyLoadingPractice/Contact.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='/' element={<App/>}>
       <Route path='/About' element={<About/>}  />
       <Route path='/Contact' element={<Contact/>}  />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
