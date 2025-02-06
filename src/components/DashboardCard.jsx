import { MoreVertical } from "lucide-react";
import { Button } from "./ui/uiButton";
import { Card } from "./ui/uiCard";

export function DashboardCard({ icon, status = "active" }) {
  return (
    <Card className="relative">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10">{icon}</div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status === "active" ? "bg-green-500" : "bg-gray-300"}`} />
          <Button className="p-2">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="mt-4 h-12">
        <svg viewBox="0 0 100 40" className="w-full h-full text-blue-500">
          <path d="M0 35 C20 32, 40 30, 60 15 S80 5, 100 0" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </Card>
  );
}