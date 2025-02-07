import { useParams } from "react-router-dom";
import ServiceForm from "../../components/forms/serviceForm";
import { MainLayout } from "../../components/layouts/MainLayout";

const ServiceDetail = ({ isSidebarVisible, toggleSidebar }) => {
	const { serviceType } = useParams();

	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<ServiceForm serviceName={serviceType} />;
		</MainLayout>
	);
};

export default ServiceDetail;
