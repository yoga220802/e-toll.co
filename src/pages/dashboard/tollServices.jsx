import React from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import ServiceCard from "../../components/serviceCard";
import { FaAmbulance } from "react-icons/fa";
import { GiTowTruck } from "react-icons/gi";
import { BiSolidCarMechanic } from "react-icons/bi";
import { MdFireTruck } from "react-icons/md";
import { RiPoliceCarFill } from "react-icons/ri";

export default function TollServicePage({ isSidebarVisible, toggleSidebar }) {
	const iconAttributes = {
		size: 60,
		color: "rgba(17, 54, 131, 1)",
	};
	const services = [
		{
			title: "Ambulans",
			icon: <FaAmbulance {...iconAttributes} />,
			path: "/toll-service/Ambulan",
		},
		{
			title: "Derek",
			icon: <GiTowTruck {...iconAttributes} />,
			path: "/toll-service/Derek",
		},
		{
			title: "Mekanik",
			icon: <BiSolidCarMechanic {...iconAttributes} />,
			path: "/toll-service/Mekanik",
		},
		{
			title: "Pemadam Kebakaran",
			icon: <MdFireTruck {...iconAttributes} />,
			path: "/toll-service/Pemadam-Kebakaran",
		},
		{
			title: "Polisi",
			icon: <RiPoliceCarFill {...iconAttributes} />,
			path: "/toll-service/Polisi",
		},
	];

	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className='p-6'>
				<h1 className='text-2xl font-bold'>Layanan Jalan Toll</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
					{services.map((service) => (
						<ServiceCard key={service.title} {...service} />
					))}
				</div>

				<div className='mt-10'>
					<h2 className='text-lg font-semibold'>
						Prosedur untuk melakukan panggilan layanan jalan tol
					</h2>
					<ul className='mt-2 list-disc pl-5'>
						<li>Pilih layanan jalan tol yang diinginkan</li>
						<li>Masukkan nama, warna, dan nomor plat kendaraan, lokasi anda berdasarkan papan patok kilometer terdekat di jalan tol yang anda lalui, serta keluhan anda dalam perjalanan</li>
						<li>Mohon menunggu di lokasi anda hingga petugas tiba</li>
					</ul>
				</div>
			</div>
		</MainLayout>
	);
}
