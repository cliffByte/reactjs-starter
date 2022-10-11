import { Outlet } from "react-router-dom";
import SidebarProvider from "../../contexts/Sidebar";
import NavBar from "../organisms/NavBar";
import Sidebar from "../organisms/Sidebar";

const DashboardTemplate = () => {
  return (
    <div className="dashboardLayout_section">
      <div className="dashboard_sidebar">
        {/* sidebar context for check sidebar minimize or or  */}
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
      </div>
      <div className="dashboard_container">
        <div className="dashboard_contain">
          <NavBar />
          <div className="py-2"></div>
          <Outlet />
          <div className="py-2"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
