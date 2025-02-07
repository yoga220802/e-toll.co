import { LayoutGrid, CalendarRange, User, Store, ReceiptText, BadgeInfo, Clock, Settings, LogOut } from "lucide-react";
import { Button } from "./ui/uiButton";
import { useNavigate, useLocation } from 'react-router-dom';

export function Sidebar({ isSidebarVisible, toggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", path: "/dashboard" },
    { icon: CalendarRange, label: "Kartu E-Tol", path: "/toll-card" },
    { icon: User, label: "Perjalanan", path: "/trip" },
    { icon: Store, label: "Layanan Jalan Tol", path: "/toll-service" },
    { icon: BadgeInfo, label: "Panduan Lalu Lintas", path: "/toll-guide" },
    { icon: ReceiptText, label: "Transaksi", path: "/transaction" },
    { icon: Clock, label: "Riwayat", path: "/history" },
  ];

  return (
    <div className={`fixed left-0 h-screen w-[280px] bg-gradient-to-b from-[#6E37FF] to-[#8D6AFF] text-white p-6 flex flex-col transition-transform duration-300 ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"}`}>
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
          <Button
            key={item.label}
            className={`w-full flex items-center gap-3 text-white ${location.pathname === item.path ? "bg-white/20" : "hover:bg-white/10"}`}
            onClick={() => navigate(item.path)}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Button>
        ))}
      </nav>
      <Button className="mb-8 bg-white text-[#6E37FF]" onClick={() => navigate("/sign-up")}>+ Register</Button>
      <div className="space-y-2">
        <Button className="w-full flex items-center gap-3 text-white hover:bg-white/10" onClick={() => navigate("/setting")}>
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