import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import userData from "../../data/userData.json"; // Data user dummy
import { useNavigate } from "react-router-dom";

import profile from "../../assets/images/profile.svg"; // Ganti dengan path gambar avatar user

const Settings = ({ isSidebarVisible, toggleSidebar }) => {
	const [user, setUser] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		setUser(userData);
	}, []);

	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className='p-6'>
				{/* Title */}
				<h1 className='text-2xl font-bold my-4'>Settings</h1>

				{/* Profil Pengguna */}
				<div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6'>
					<img
						src={profile} // Ganti dengan path gambar avatar user
						alt='Profile'
						className='w-12 h-12 rounded-full'
					/>
						<div className='text-center sm:text-left'>
						<p className='text-lg font-semibold'>{user.username}</p>
						<p className='text-gray-500'>{user.email}</p>
					</div>
				</div>

				{/* Menu Pengaturan */}
				<div className='space-y-3 max-w-md'>
					<button
						className='w-full text-left border p-3 rounded-lg hover:bg-gray-100'
						onClick={() => navigate("/userDetail")}>
						Informasi Akun
					</button>
					<button
						className='w-full text-left border p-3 rounded-lg hover:bg-gray-100'
						onClick={() => navigate("/verify-email?next=/changePassword")}>
						Ganti Password
					</button>
					<button
						className='w-full text-left border p-3 rounded-lg hover:bg-gray-100'
						onClick={() => navigate("/verify-email?next=/changeUsername")}>
						Ubah Username
					</button>
					<button className='w-full text-left border p-3 rounded-lg text-red-500 hover:bg-red-50' onClick={() => navigate("/verify-email?next=/sign-up")}>
						Hapus Akun
					</button>
				</div>
			</div>
		</MainLayout>
	);
};

export default Settings;
