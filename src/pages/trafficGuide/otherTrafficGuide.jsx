import { MainLayout } from "../../components/layouts/MainLayout";
import UnderDevelopment from "../underDevelopment";

const UnderDevelopmentTrafficGuide = ({isSidebarVisible, toggleSidebar}) => {
  return (
    <MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
        <UnderDevelopment />
    </MainLayout>
  );
};

export default UnderDevelopmentTrafficGuide;
