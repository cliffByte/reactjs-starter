import PrivateAxiosInstance from "../api/PrivateAxios";
// * type
type permissionType = {
  project: string;
  permissions: string[];
};

const useCreteAdmin = () => {
  // * function to get list of project
  const getProjects = async () => {
    try {
      const res = await PrivateAxiosInstance.get("/admin/projects");
      return {
        success: true,
        data: res?.data?.data,
        message: res?.data?.message,
      };
    } catch (error: any) {
      return { success: false, message: error?.response?.data?.message };
    }
  };

  // * function to get permissions
  const getPermissions = async () => {
    try {
      const res = await PrivateAxiosInstance.get("/admin/permissions");
      return {
        success: true,
        data: res?.data?.data,
        message: res?.data?.message,
      };
    } catch (error: any) {
      return { success: false, message: error?.response?.data?.message };
    }
  };

  // function to create admin
  const createAdmin = async (
    name: string,
    email: string,
    password: string,
    roleLevel: number,
    permissions: permissionType[]
  ) => {
    try {
      const res = await PrivateAxiosInstance.post("/admin", {
        name,
        email,
        password,
        roleLevel,
        permissions,
      });
      return {
        success: true,
        data: res?.data?.data,
        message: res?.data?.message,
      };
    } catch (error: any) {
      return { success: false, message: error?.response?.data?.message };
    }
  };

  return { getProjects, getPermissions, createAdmin };
};

export default useCreteAdmin;
