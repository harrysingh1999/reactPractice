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
import NumberCycler from "./Components/NumberCycler.jsx";
import DayOfWeek from "./Components/DayofWeek.jsx";
import StopWatch from "./Components/StopWatch.jsx";
import MemoizationHooksDemo from "./Components/OptimizationHooks/MemoizationHooksDemo.jsx";
import SwitchPlayer from "./Components/PlayerScores/SwitchPlayer.jsx";
import HOCCounter from "./Components/HOC/HOCCounter.jsx";
import DisplayCustomInput from "./Components/ForwardRef/DisplayCustomInput.jsx";
import CustomError from "./Components/ErrorBoundary/CustomError.jsx";
import HandleCustomError from "./Components/ErrorBoundary/HandleCustomError.jsx";
import PingPong from "./Components/PingPong Score/PingPong.jsx";

const InputCaseChange = lazy(() => import("./Components/InputCaseChange.jsx"));

const numbers = [10, 20, 30, 40, 50];

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
      <Route path="/StopWatch" element={<StopWatch />} />
      <Route path="/MemoizationHooksDemo" element={<MemoizationHooksDemo />} />
      <Route path="/SwitchPlayer" element={<SwitchPlayer />} />
      <Route
        path="/NumberCycler"
        element={<NumberCycler numbers={numbers} />}
      />
      <Route path="/DayOfWeek" element={<DayOfWeek date="2024-08-24" />} />
      <Route path="/HOC-Example" element={<HOCCounter />} />
      <Route path="/forwardRef" element={<DisplayCustomInput />} />
      <Route path="/ErrorBoundary" element={<HandleCustomError />} />
      <Route path="/PingPongGame" element={<PingPong />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
