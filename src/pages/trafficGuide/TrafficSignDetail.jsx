import { MainLayout } from "../../components/layouts/MainLayout";
import narrow_left_right from "../../assets/images/traffic sign/narrow-left-right.svg";
import narrow_left from "../../assets/images/traffic sign/narrow-left.svg";
import expand_left from "../../assets/images/traffic sign/expand-left.svg";
import reduce_left from "../../assets/images/traffic sign/reduce-left.svg";
import narrow_right from "../../assets/images/traffic sign/narrow-right.svg";
import expand_right from "../../assets/images/traffic sign/expand-right.svg";
import expand_left_right from "../../assets/images/traffic sign/expand-left-right.svg";


const TrafficSignDetail = ({ isSidebarVisible, toggleSidebar }) => {
	const trafficSigns = [
		{
			img: narrow_left_right,
			text: "Penyempitan badan jalan di bagian kiri dan kanan",
		},
		{
			img: narrow_left,
			text: "Penyempitan badan jalan di bagian kiri",
		},
		{
			img: expand_left,
			text: "Pelebaran badan jalan di bagian kiri",
		},
		{
			img: reduce_left,
			text: "Pengurangan lajur kiri",
		},
		{
			img: narrow_right,
			text: "Penyempitan badan jalan di bagian kanan",
		},
		{
			img: expand_right,
			text: "Pelebaran badan jalan di bagian kanan",
		},
		{
			img: expand_left_right,
			text: "Pelebaran badan jalan di bagian kiri dan kanan",
		},
	];
	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className='px-6 py-4'>
				<h2 className='text-2xl font-semibold'>Rambu Lalu Lintas</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
					{trafficSigns.map((sign, index) => (
						<div
							key={index}
							className='flex items-center gap-4 p-3 rounded-lg shadow'>
							<img
								src={sign.img}
								alt={sign.text}
								className='w-12 h-12 object-contain'
							/>
							<p className='text-sm'>{sign.text}</p>
						</div>
					))}
				</div>
			</div>
		</MainLayout>
	);
};

export default TrafficSignDetail;
