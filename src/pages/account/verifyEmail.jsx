import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import userData from "../../data/userData.json"; // Import data dummy
import { useNavigate, useLocation } from "react-router-dom";
import { MainLayout } from "../../components/layouts/MainLayout";

const VerifyEmail = ({ isSidebarVisible, toggleSidebar }) => {
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(userData);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const params = new URLSearchParams(location.search);
		const next = params.get("next");
		navigate(next || "/");
	};

	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className='p-6'>
				{/* Tombol Back */}
				<button
					onClick={() => navigate("/setting")}
					className='flex items-center text-gray-600 hover:text-gray-900 mb-4'>
					<FaArrowLeft className='mr-2' />
				</button>

				{/* Judul */}
				<h1 className='text-2xl font-bold mb-6'>Settings</h1>

				{/* Form Verifikasi Email */}
				<div className='max-w-lg'>
					<h2 className='text-xl font-semibold mb-4'>Verifikasi Email</h2>

					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='flex flex-col sm:flex-row items-center justify-between'>
							<label className='text-gray-700 mb-2 sm:mb-0'>Masukan Email</label>
							<input
								type='email'
								className='border border-gray-400 rounded-md p-2 w-full sm:w-64'
								placeholder="Masukan Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className='flex flex-col sm:flex-row items-center justify-between'>
							<label className='text-gray-700 mb-2 sm:mb-0'>Masukan Password</label>
							<input
								type='password'
								className='border border-gray-400 rounded-md p-2 w-full sm:w-64'
								placeholder="Masukan Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>

						{/* Tombol Aksi */}
						<div className='flex justify-end space-x-4 mt-4'>
							<button
								type='button'
								onClick={() => navigate("/setting")}
								className='px-6 py-2 border border-gray-400 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300'>
								Kembali
							</button>
							<button
								type='submit'
								className='px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700'>
								Selanjutnya
							</button>
						</div>
					</form>
				</div>
			</div>
		</MainLayout>
	);
};

export default VerifyEmail;
