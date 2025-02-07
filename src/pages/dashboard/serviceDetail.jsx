import { useParams } from "react-router-dom";
import ServiceForm from "../../components/forms/serviceForm";
import { MainLayout } from "../../components/layouts/MainLayout";

const ServiceDetail = ({ isSidebarVisible, toggleSidebar }) => {
	const { serviceType } = useParams();

	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className="px-4 py-6 md:px-8">
				<ServiceForm serviceName={serviceType} />
			</div>
		</MainLayout>
	);
};

export default ServiceDetail;
