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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
