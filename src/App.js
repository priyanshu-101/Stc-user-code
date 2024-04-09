import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Suspense from "./components/loaders/suspense";
import E404 from "./pages/errors/404";

const Login = React.lazy(() => import("./pages/auth/login"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const ReportList = React.lazy(() => import("./pages/reports/list"));
const ReportView = React.lazy(() => import("./pages/reports/details"));
const PreviousOA = React.lazy(() => import("./pages/previousyear"));
const PreviousQuestion = React.lazy(() =>
  import("./pages/previousyearquestion")
);
const Feedback = React.lazy(() => import("./pages/feedback"));
const About = React.lazy(() => import("./pages/about"));
const Reset = React.lazy(() => import("./pages/reset"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={Suspense}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/reports" element={<ReportList />} />
          <Route exact path="/reports/:id" element={<ReportView />} />
          <Route exact path="/previousyear" element={<PreviousOA />} />
          <Route
            exact
            path="/previousyear/:id"
            element={<PreviousQuestion />}
          />
          <Route exact path="/reset/:token" element={<Reset />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" elementf={<E404 />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
