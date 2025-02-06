import React from "react";
import { ArrowLeft, User, CalendarRange, Store, BadgeInfo, ReceiptText, History } from "lucide-react";
import { DashboardCard } from "../components/DashboardCard";
import { Button } from "../components/ui/uiButton";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Dashboard({ isSidebarVisible, toggleSidebar }) {
  const navigate = useNavigate();
  const cards = [
    { icon: <User className="w-full h-full" />, onclick: () => navigate("/trip") },
    { icon: <CalendarRange className="w-full h-full" />, onclick: () => navigate("/toll-card") },
    { icon: <Store className="w-full h-full" />, onclick: () => navigate("/toll-service") },
    { icon: <BadgeInfo className="w-full h-full" />, onclick: () => navigate("/toll-guide") },
    { icon: <ReceiptText className="w-full h-full" />, onclick: () => navigate("/transaction") },
    { icon: <History className="w-full h-full" />, onclick: () => navigate("/history") },
  ];

  return (
    <MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
      <div className="flex items-center gap-4 mb-6">
        <Button>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} onclick={card.onclick} />
        ))}
      </div>
    </MainLayout>
  );
}