import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import userData from "../../data/userData.json"; // Import data dummy
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../../components/layouts/MainLayout";
import checkSymbol from "../../assets/images/check symbol.svg"; // Import check symbol image

const ChangePassword = ({ isSidebarVisible, toggleSidebar }) => {
	const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [showPopup, setShowPopup] = useState(false); // State for showing popup

	const navigate = useNavigate();
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(userData);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowPopup(true); // Show popup on submit
	};

	const handlePopupClick = () => {
		setShowPopup(false);
		navigate("/setting");
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

				{/* Form Ubah Username */}
				<div className='max-w-lg'>
					<h2 className='text-xl font-semibold mb-4'>Ubah Password</h2>

					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='flex flex-col sm:flex-row items-center justify-between'>
							<label className='text-gray-700 mb-2 sm:mb-0'>Masukan Password</label>
							<input
								type='password'
								className='border border-gray-400 rounded-md p-2 w-full sm:w-64'
								placeholder="Masukan Password Lama"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>

						<div className='flex flex-col sm:flex-row items-center justify-between'>
							<label className='text-gray-700 mb-2 sm:mb-0'>Masukan Password Baru</label>
							<input
								type='password'
								className='border border-gray-400 rounded-md p-2 w-full sm:w-64'
								placeholder='Masukan Password Baru'
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								required
							/>
						</div>

						<div className='flex flex-col sm:flex-row items-center justify-between'>
							<label className='text-gray-700 mb-2 sm:mb-0'>Konfirmasi Password Baru</label>
							<input
								type='password'
								className='border border-gray-400 rounded-md p-2 w-full sm:w-64'
								placeholder='Konfirmasi Password Baru'
								value={confirmNewPassword}
								onChange={(e) => setConfirmNewPassword(e.target.value)}
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
								Konfirmasi
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* Popup */}
			{showPopup && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50' onClick={handlePopupClick}>
					<div className='bg-white p-6 rounded-lg'>
						<img src={checkSymbol} alt="Check Symbol" className='w-16 h-16 mx-auto' />
						<p className='text-center mt-4'>Password berhasil diubah!</p>
					</div>
				</div>
			)}
		</MainLayout>
	);
};

export default ChangePassword;
