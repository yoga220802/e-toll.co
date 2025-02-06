import React, { useState } from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { Button } from "../ui/uiButton";
import { Menu } from "lucide-react";

export function MainLayout({ children }) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="min-h-screen flex">
      <div
        className={`transition-all duration-300 ${
          isSidebarVisible ? "w-[280px] opacity-100" : "w-0 opacity-0"
        }`}
      >
        {isSidebarVisible && <Sidebar />}
      </div>
      <div className={`flex-1 transition-all duration-300 ${isSidebarVisible ? "ml-[0px]" : "ml-0"}`}>
        <Header />
        <main className="p-6">
          <Button className="mb-4" onClick={toggleSidebar}>
            <Menu className="w-5 h-5" />
          </Button>
          {children}
        </main>
      </div>
    </div>
  );
}