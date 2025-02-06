import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router/routes";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <AppRoutes isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
    </Router>
  );
}

export default App;