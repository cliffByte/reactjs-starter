import Dashboard from "../ui/pages/dashboard/Dashboard";
import LoginRequest from "../ui/pages/dashboard/LoginRequest";
import { FaHome, FaUser } from "react-icons/fa";

export const sidebarRoutes = [
  {
    path: "",
    element: <Dashboard />,
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "login-request",
    element: <LoginRequest />,
    name: "Account Login Requests",
    icon: <FaUser />,
  },
];
