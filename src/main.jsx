import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Accordion from './Components/Accordion/Accordion.jsx'
import Modal from './Components/Modal/Modal.jsx'
import CenterElements from './Components/CenterElements/CenterElements.jsx'
import Counter from './Components/customHookPractice/Counter.jsx'
import LazyLoading from './Components/LazyLoadingPractice/LazyLoading.jsx'
import DropDowns from './Components/DropDowns/DropDowns.jsx'
import Multipleinputs from './Components/MulitpleInputs/Multipleinputs.jsx'

const About = lazy( () => import('./Components/LazyLoadingPractice/About.jsx'))

const router = createBrowserRouter(
 createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route path='/About' element={<About/>}  />
       <Route path='/Accordion' element={<Accordion/>}  />
       <Route path='/Modal' element={<Modal/>}  />
       <Route path='/CenterElements' element={<CenterElements/>}  />
       <Route path='/Counter' element={<Counter/>}  />  
       <Route path='/LazyLoading' element={<LazyLoading/>}  />  
       <Route path='/DropDowns' element={<DropDowns/>}  />  
       <Route path='/Multipleinputs' element={<Multipleinputs/>}  />  
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
