import React, { useState, useEffect } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
// import UnderDevelopment from '../underDevelopment';
import tripHistory from "../../data/tripHistory.json";
import graphPlaceholder from "../../assets/images/graphPlaceholder.svg";

export default function HistoryPage({ isSidebarVisible, toggleSidebar }) {
	const [historyData, setHistoryData] = useState([]);
	const [knowledgeMetrics, setKnowledgeMetrics] = useState({});

	useEffect(() => {
		// Simulasi fetch data dummy dari JSON
		setHistoryData(tripHistory.history);
		setKnowledgeMetrics(tripHistory.knowledgeMetrics);
	}, []);
	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className='p-6 flex justify-center'>
				<div className='w-full max-w-3xl'>
					<h1 className='text-2xl font-bold mb-4'>Riwayat Gardu Tol</h1>

					{/* History Cards */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						{historyData.map((item) => (
							<div key={item.id} className='bg-white p-4 rounded-lg shadow-md'>
								<p className='text-gray-500 text-sm'>{item.date}</p>
								<h2 className='font-semibold'>{item.title}</h2>
								<p className='text-gray-700'>{item.route}</p>
								<div className='mt-2'>
									<img src={graphPlaceholder} alt='Graph' className='w-full h-12' />
								</div>
							</div>
						))}
					</div>

					{/* Knowledge Metrics */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
						<div className='bg-white p-4 rounded-lg shadow-md text-center'>
							<h3 className='text-gray-600'>Starting Knowledge</h3>
							<p className='text-xl font-bold'>{knowledgeMetrics.starting}</p>
						</div>
						<div className='bg-white p-4 rounded-lg shadow-md text-center'>
							<h3 className='text-gray-600'>Current Knowledge</h3>
							<p className='text-xl font-bold'>{knowledgeMetrics.current}</p>
						</div>
						<div className='bg-white p-4 rounded-lg shadow-md text-center'>
							<h3 className='text-gray-600'>Knowledge Gain</h3>
							<p className='text-xl font-bold'>{knowledgeMetrics.gain}</p>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
