import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "../pages/welcome";
import SignUpForm from "../pages/signUp";
import SignInForm from "../pages/signIn";
import Landing from "../pages/landing";
import Dashboard from "../pages/dashboard";
import TripPage from "../pages/trip";
import TollCardPage from "../pages/tollCard";
import TollServicePage from "../pages/tollServices";
import GuidePage from "../pages/guide";
import TransactionPage from "../pages/transaction";
import HistoryPage from "../pages/history";

const AppRoutes = ({ isSidebarVisible, toggleSidebar }) => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/sign-in" element={<SignInForm />} />
      <Route path="/sign-up" element={<SignUpForm />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
      <Route path="/toll-card" element={<TollCardPage isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
      <Route path="/trip" element={<TripPage isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
      <Route path="/toll-service" element={<TollServicePage isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
      <Route path="/toll-guide" element={<GuidePage isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
      <Route path="/transaction" element={<TransactionPage isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
      <Route path="/history" element={<HistoryPage isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
    </Routes>
  );
};

export default AppRoutes;