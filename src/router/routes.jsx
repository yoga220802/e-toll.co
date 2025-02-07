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
  NotificationList,
  ServiceDetail,
  TrafficSignDetail,
  UnderDevelopmentTrafficGuide,
  Settings,
  AccountDetail,
  VerifyEmail,
  ChangeUsername,
  ChangePassword
} from "../pages";

const AppRoutes = ({ isSidebarVisible, toggleSidebar }) => {
  const renderRoute = (path, Component) => (
    <Route path={path} element={<Component isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />} />
  );

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/sign-in" element={<SignInForm />} />
      <Route path="/sign-up" element={<SignUpForm />} />
      <Route path="/landing" element={<Landing />} />
      {renderRoute("/dashboard", Dashboard)}
      {renderRoute("/toll-card", TollCardPage)}
      {renderRoute("/trip", TripPage)}
      {renderRoute("/toll-service", TollServicePage)}
      {renderRoute("/toll-guide", GuidePage)}
      {renderRoute("/transaction", TransactionPage)}
      {renderRoute("/history", HistoryPage)}
      {renderRoute("/notification", NotificationList)}
      {renderRoute("/setting", Settings)}
      {renderRoute("/toll-service/:serviceType", ServiceDetail)}
      {renderRoute("/toll-guide/traffic-signs", TrafficSignDetail)}
      {renderRoute("/toll-guide/under-dev", UnderDevelopmentTrafficGuide)}
      {renderRoute("/userDetail", AccountDetail)}
      {renderRoute("/changeUsername", ChangeUsername)}
      {renderRoute("/changePassword", ChangePassword)}
      {renderRoute("/verify-email", VerifyEmail)}
    </Routes>
  );
};

export default AppRoutes;