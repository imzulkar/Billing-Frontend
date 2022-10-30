import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/authentication/login";
import Dashboard from "./components/billing/dashboard";
import AddRemoveInputField from "./components/billing/test";
import Profile from "./components/profile";

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
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/test" element={<AddRemoveInputField />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
