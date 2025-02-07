import React from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import UnderDevelopment from "../underDevelopment";
import { useNavigate } from "react-router-dom";

import traffic_signs from "../../assets/images/trafic guide/traffic-signs.svg"
import speed_limit from "../../assets/images/trafic guide/speed-limit.svg"
import emergency from "../../assets/images/trafic guide/emergency.svg"
import driving_tips from "../../assets/images/trafic guide/driving-tips.svg"
import road_rules from "../../assets/images/trafic guide/road-rules.svg"
import accident_stats from "../../assets/images/trafic guide/accident-stats.svg"

export default function GuidePage({ isSidebarVisible, toggleSidebar }) {
	const trafficGuideData = [
		{
			title: "Rambu lalu lintas",
			image: traffic_signs,
			link: "/toll-guide/traffic-signs",
		},
		{
			title: "Kecepatan dalam tol",
			image: speed_limit,
			link: "/toll-guide/under-dev",
		},
		{
			title: "Kondisi darurat",
			image: emergency,
			link: "/toll-guide/under-dev",
		},
		{
			title: "Tips berkendara",
			image: driving_tips,
			link: "/toll-guide/under-dev",
		},
		{
			title: "Kewajiban dan Larangan",
			image: road_rules,
			link: "/toll-guide/under-dev",
		},
		{
			title: "Statistik kecelakaan",
			image: accident_stats,
			link: "/toll-guide/under-dev",
		},
	];
	const navigate = useNavigate();
	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className="px-6 py-4">
				<h2 className="text-2xl font-semibold">Panduan Lalu Lintas</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					{trafficGuideData.map((item, index) => (
						<div
							key={index}
							onClick={() => navigate(item.link)}
							className="relative cursor-pointer rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition"
						>
							{/* Gambar dengan Efek Gradien */}
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
							/>
							{/* Overlay Gradien dan Teks */}
							<div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-[rgba(25,13,131,1)] via-[rgba(12,40,110,0.5)] to-[rgba(12,40,110,0)] text-white font-medium text-center">
								{item.title}
							</div>
						</div>
					))}
				</div>
			</div>
		</MainLayout>
	);
}
