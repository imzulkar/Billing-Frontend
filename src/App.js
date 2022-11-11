import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/authentication/login";
import BillingList from "./components/billing/billingList";
import Dashboard from "./components/billing/dashboard";
import Invoice from "./components/billing/invoice";
import Profile from "./components/profile";
import ProjectDashboard from "./components/projects/projectDashboard";
import ProjectList from "./components/projects/projectList";
function App() {
  const token = localStorage.getItem("accessToken");
  const path = window.location.pathname;

  if (!token) {
    return <Signin />;
  }
  if (token && path === "/") {
    // console.log(window.history);
    return (window.location.href = "/dashboard");
    // window.history.back()
  }

  return (
    <div className="wrapper">
      <Profile />
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<Signin />} />
          {/* <Route exact path="/profile" element={<Profile />} /> */}
          <Route exact path="/invoices" element={<BillingList />} />
          <Route exact path="/projects" element={<ProjectList />} />
          <Route exact path="/add-project" element={<ProjectDashboard />} />
          <Route exact path="/peram/:invId" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
