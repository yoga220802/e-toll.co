import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "../pages/welcome";
import SignUpForm from "../pages/signUp";
import SignInForm from "../pages/signIn";
import Landing from "../pages/landing";
import Dashboard from "../pages/dashboard"; // Import the new Dashboard component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/sign-in" element={<SignInForm />} />
      <Route path="/sign-up" element={<SignUpForm />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Add the new Dashboard route */}
    </Routes>
  );
};

export default AppRoutes;