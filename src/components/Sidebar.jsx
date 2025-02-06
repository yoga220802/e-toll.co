import { LayoutGrid, CalendarRange, User, Store, ReceiptText, BadgeInfo, Clock, Settings, LogOut } from "lucide-react";
import { Button } from "./ui/uiButton";
import { useNavigate } from 'react-router-dom';

export function Sidebar() {
  const navigate = useNavigate();
  const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", active: true, action: () => navigate("/dashboard") },
    { icon: CalendarRange, label: "Kartu E-Tol", action: () => navigate("/toll-card") },
    { icon: User, label: "Perjalanan", action: () => navigate("/trip") },
    { icon: Store, label: "Layanan Jalan Tol", action: () => navigate("/toll-service") },
    { icon: BadgeInfo, label: "Panduan Lalu Lintas", action: () => navigate("/toll-guide") },
    { icon: ReceiptText, label: "Transaksi", action: () => navigate("/transaction") },
    { icon: Clock, label: "Riwayat", action: () => navigate("/history") },
  ];

  return (
    <div className="fixed left-0 h-screen w-[280px] bg-gradient-to-b from-[#6E37FF] to-[#8D6AFF] text-white p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path fill="currentColor" d="M12 0L24 12L12 24L0 12L12 0Z" />
          </svg>
        </div>
        <span className="text-xl font-bold">E-TOLL.CO</span>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Button key={item.label} className={`w-full flex items-center gap-3 text-white ${item.active ? "bg-white/20" : "hover:bg-white/10"}` } onClick={item.action}>
            <item.icon className="w-5 h-5" />
            {item.label}
          </Button>
        ))}
      </nav>
      <Button className="mb-8 bg-white text-[#6E37FF]" onClick={() => navigate("/sign-up")}>+ Register</Button>
      <div className="space-y-2">
        <Button className="w-full flex items-center gap-3 text-white hover:bg-white/10">
          <Settings className="w-5 h-5" />
          Seting
        </Button>
        <Button className="w-full flex items-center gap-3 text-white hover:bg-white/10" onClick={() => navigate("/sign-in")}>
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}