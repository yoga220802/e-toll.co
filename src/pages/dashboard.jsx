// Dashboard.jsx
import { ArrowLeft, User, CalendarRange, Store, BadgeInfo, ReceiptText, History } from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { DashboardCard } from "../components/DashboardCard";
import { Button } from "../components/ui/uiButton";

export default function Dashboard() {
  const cards = [
    { icon: <User className="w-full h-full" /> },
    { icon: <CalendarRange className="w-full h-full" /> },
    { icon: <Store className="w-full h-full" /> },
    { icon: <BadgeInfo className="w-full h-full" /> },
    { icon: <ReceiptText className="w-full h-full" /> },
    { icon: <History className="w-full h-full" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-[280px]">
        <Header />
        <main className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Button>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <DashboardCard key={index} {...card} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
