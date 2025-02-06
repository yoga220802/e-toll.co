import React from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { Button } from "../ui/uiButton";
import { Menu } from "lucide-react";

export function MainLayout({ children, isSidebarVisible, toggleSidebar }) {
  return (
    <div className="min-h-screen flex">
      <div
        className={`transition-all duration-300 ${
          isSidebarVisible ? "w-[20px]" : "w-0"
        }`}
      >
        <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      </div>
      <div className={`flex-1 transition-all duration-300 ${isSidebarVisible ? "ml-[280px]" : "ml-0"}`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-6">
          <Button className="mb-4 sm:hidden" onClick={toggleSidebar}>
            <Menu className="w-5 h-5" />
          </Button>
          {children}
        </main>
      </div>
    </div>
  );
}