import React, {useState} from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import Check from "../../assets/images/check symbol.svg";

export default function TollCardPage({ isSidebarVisible, toggleSidebar }) {
	const [bank, setBank] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [showPopup, setShowPopup] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (bank && cardNumber) {
			setShowPopup(true);
		}
	};

	const handleClosePopup = () => {
		setShowPopup(false);
		setBank("");
		setCardNumber("");
	};
	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className='p-6 flex justify-center'>
				<div className='w-full max-w-3xl'>
					<h1 className='text-2xl font-bold mb-4'>E-Toll Card</h1>

					<div className='bg-white shadow-lg p-6 rounded-lg'>
						<h2 className='text-xl font-semibold mb-4'>BCA Flazz</h2>
						<form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-4'>
							{/* Dropdown Pilihan Bank */}
							<select
								value={bank}
								onChange={(e) => setBank(e.target.value)}
								className='border p-2 rounded-lg w-full md:w-auto'>
								<option value=''>Tambahkan Bank</option>
								<option value='BRI'>BRI</option>
								<option value='BNI'>BNI</option>
								<option value='BCA'>BCA</option>
								<option value='MANDIRI'>MANDIRI</option>
							</select>

							{/* Input Nomor Kartu */}
							<input
								type='text'
								placeholder='Masukan No Kartu'
								value={cardNumber}
								onChange={(e) => setCardNumber(e.target.value)}
								className='border p-2 rounded-lg flex-1'
							/>

							{/* Tombol Proses */}
							<button
								type='submit'
								className='bg-purple-500 text-white px-4 py-2 rounded-lg'>
								Proses
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Popup Sukses */}
			{showPopup && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-6 rounded-lg shadow-lg text-center'>
						<img
							src={Check}
							alt="Check"
							onClick={handleClosePopup}
							className='cursor-pointer'
						/>
					</div>
				</div>
			)}
		</MainLayout>
	);
}
