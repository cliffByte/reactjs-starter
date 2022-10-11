import { createContext, useState, useEffect } from "react";

// axios instance
import AxiosInstance from "../api";
import PrivateAxiosInstance from "../api/PrivateAxios";

import Admin from "../models/Admin";

// interface for user
interface Props {
  children: React.ReactNode;
}

// context
export const AuthContext = createContext<any>(null);

// auth provider
const AuthProvider = ({ children }: Props) => {
  let userData;

  try {
    userData = JSON.parse(localStorage.getItem("user") || "{}");
  } catch (error: any) {
    userData = {};
  }
  const [user, setUser] = useState<any>(userData);
  const [admin, setAdmin] = useState<Admin>(Admin.plainToInstance(user));
  // * for remember me login credential
  const [rememberMeData, setRememberMeData] = useState(
    JSON.parse(localStorage.getItem("rememberMe") || "{}")
  );
  const [rememberMe, setRememberMe] = useState(true);

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem("rememberMe", JSON.stringify(rememberMeData));
    } else {
      localStorage.removeItem("rememberMe");
    }
    localStorage.setItem("user", JSON.stringify(user));
    setAdmin(Admin.plainToInstance(user));
  }, [user, rememberMeData, rememberMe]);

  //* function to login
  const login = async (email: string, password: string) => {
    try {
      const res = await AxiosInstance.post("/auth/login", {
        email,
        password,
      });
      let user = res.data.data as Admin;
      // *Fetch projects details
      if (res.data.data.role === "admin") {
        const projects = await (
          await PrivateAxiosInstance.get("/admin/projects")
        ).data.data.projects;
        if (user.permissions) {
          user.permissions = user.permissions.map((permission) => {
            const projectDetails = projects?.find(
              (projectDetails: any) => projectDetails.id === permission.project
            );
            const { id, ...rest } = projectDetails;
            return { ...permission, ...rest };
          });
        } else {
          user.permissions = [];
        }
      }
      setUser(user);
      return {
        success: true,
        message: res.data.message,
        role: res.data.data.role,
      };
    } catch (error: any) {
      // handle error
      return {
        success: false,
        message: error.response.data
          ? error.response.data.message
          : error.message,
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        login,
        rememberMe,
        setRememberMe,
        rememberMeData,
        setRememberMeData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
