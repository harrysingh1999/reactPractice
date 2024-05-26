<<<<<<< HEAD
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
=======
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Accordion from "./Components/Accordion.jsx";
import Modal from "./Components/Modal.jsx";
import CenterElements from "./Components/CenterElements.jsx";
import Counter from "./Components/customHookPractice/Counter.jsx";
import DropDowns from "./Components/DropDowns.jsx";
import Multipleinputs from "./Components/Multipleinputs.jsx";
import ImageSlider from "./Components/ImageSlider.jsx";
import ProgressBar from "./Components/ProgressBar.jsx";

const InputCaseChange = lazy(() => import("./Components/InputCaseChange.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Accordion" element={<Accordion />} />
      <Route path="/Modal" element={<Modal />} />
      <Route path="/CenterElements" element={<CenterElements />} />
      <Route path="/Counter" element={<Counter />} />
      <Route path="/DropDowns" element={<DropDowns />} />
      <Route path="/Multipleinputs" element={<Multipleinputs />} />
      <Route path="/InputCaseChange" element={<InputCaseChange />} />
      <Route path="/ImageSlider" element={<ImageSlider />} />
      <Route path="/ProgressBar" element={<ProgressBar />} />
>>>>>>> c7085607635bc58b54527ce06efe6e67406aa0ee
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
