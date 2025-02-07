import React, { useState, useEffect } from "react";
import NotificationData from "../../data/notifications.json";
import { MainLayout } from "../../components/layouts/MainLayout";
export default function NotificationList({ isSidebarVisible, toggleSidebar }) {
	const [notifications, setNotifications] = useState([]);
	const [selectedNotification, setSelectedNotification] = useState(null);

	useEffect(() => {
		// Memuat data notifikasi dari file JSON yang diimpor
		setNotifications(NotificationData);
	}, []);

	const handleDelete = (id) => {
		setNotifications(
			notifications.filter((notification) => notification.id !== id)
		);
	};

	const handleShowDetail = (notification) => {
		setSelectedNotification(notification);
	};

	const handleClosePopup = () => {
		setSelectedNotification(null);
	};

	return (
		<MainLayout
			isSidebarVisible={isSidebarVisible}
			toggleSidebar={toggleSidebar}>
			<div className='p-6 flex justify-center'>
				<div className='w-full max-w-3xl'>
					<h1 className='text-2xl font-bold mb-4'>Notifikasi</h1>

					<div className='bg-white shadow-lg p-6 rounded-lg'>
						{notifications.map((notification) => (
							<div
								key={notification.id}
								className='flex items-center justify-between border p-4 rounded-lg mb-2 shadow cursor-pointer'
								onClick={() => handleShowDetail(notification)}>
								<div className='flex items-center gap-2'>
									<input type='checkbox' className='w-5 h-5' />
									<span>{notification.title}</span>
								</div>
								<button
									onClick={(e) => {
										e.stopPropagation(); // Mencegah popup terbuka saat tombol hapus ditekan
										handleDelete(notification.id);
									}}
									className='text-red-500 hover:text-red-700'>
									🗑️
								</button>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* POPUP DETAIL NOTIFIKASI */}
			{selectedNotification && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-6 rounded-lg shadow-lg max-w-md'>
						<h2 className='text-xl font-bold mb-2'>{selectedNotification.title}</h2>
						<p className='mb-4 whitespace-pre-line'>
							{selectedNotification.message}
						</p>
						<button
							onClick={handleClosePopup}
							className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
							Tutup
						</button>
					</div>
				</div>
			)}
		</MainLayout>
	);
}
