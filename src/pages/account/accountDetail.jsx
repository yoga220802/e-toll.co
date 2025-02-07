import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import userData from "../../data/userData.json"; // Import data dummy
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountDetail = ({ isSidebarVisible, toggleSidebar }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(userData);
	}, []);

	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className='p-6'>
				<button
					className='flex items-center text-gray-600 hover:text-gray-900'
					onClick={() => navigate("/setting")}>
					<FaArrowLeft className='mr-2' />
				</button>
				<h1 className='text-2xl font-bold mb-4'>Settings</h1>

				<div className='bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto'>
					<h2 className='text-lg font-semibold mb-4'>Informasi Akun</h2>

					<div className='space-y-4'>
						<div>
							<label className='block font-medium'>Nama Pengguna</label>
							<input
								type='text'
								value={user.username || ""}
								className='w-full border p-2 rounded-md bg-gray-100'
								disabled
							/>
						</div>

						<div>
							<label className='block font-medium'>Nama Lengkap</label>
							<input
								type='text'
								value={user.namaLengkap || ""}
								className='w-full border p-2 rounded-md bg-gray-100'
								disabled
							/>
						</div>

						<div>
							<label className='block font-medium'>Telepon</label>
							<input
								type='text'
								value={user.telepon || ""}
								className='w-full border p-2 rounded-md bg-gray-100'
								disabled
							/>
						</div>

						<div>
							<label className='block font-medium'>Email</label>
							<input
								type='email'
								value={user.email || ""}
								className='w-full border p-2 rounded-md bg-gray-100'
								disabled
							/>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default AccountDetail;
