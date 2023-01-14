import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Suspense from "./components/loaders/suspense";
import E404 from "./pages/errors/404";

const Login = React.lazy(() => import("./pages/auth/login"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const ReportList = React.lazy(() => import("./pages/reports/list"));
const ReportView = React.lazy(() => import("./pages/reports/details"));
const Feedback = React.lazy(() => import("./pages/feedback"));
const About = React.lazy(() => import("./pages/about"));


function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={Suspense}>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route
            exact
            path="/dashboard"
            element={<Dashboard/>}
          />
          <Route
            exact
            path="/reports"
            element={<ReportList/>}
          />
          <Route
            exact
            path="/reports/:id"
            element={<ReportView/>}
          />
          <Route
            exact
            path="/feedback"
            element={<Feedback/>}
          />
          <Route
            exact
            path="/about"
            element={<About/>}
          />
          <Route exact path="*"  element={<E404/>} />
        </Routes>
      </React.Suspense>
  </BrowserRouter>
  );
}

export default App;