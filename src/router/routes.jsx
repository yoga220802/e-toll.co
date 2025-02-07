import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  WelcomePage,
  SignUpForm,
  SignInForm,
  Landing,
  Dashboard,
  TripPage,
  TollCardPage,
  TollServicePage,
  GuidePage,
  TransactionPage,
  HistoryPage,
  NotificationList
} from "../pages";
import ServiceDetail from "../pages/dashboard/serviceDetail";
import TrafficSignDetail from "../pages/trafficGuide/TrafficSignDetail";
import UnderDevelopmentTrafficGuide from "../pages/trafficGuide/otherTrafficGuide";

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
      <Route path="/notification" element={<NotificationList isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}/>} />
      <Route path="/toll-service/:serviceType" element={<ServiceDetail  isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
      <Route path="/toll-guide/traffic-signs" element={<TrafficSignDetail isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
      <Route path="/toll-guide/under-dev" element={<UnderDevelopmentTrafficGuide isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
    </Routes>
  );
};

export default AppRoutes;