// import Login from "../UI/pages/auth/Login";
// import ForgetPassword from "../UI/pages/auth/ForgetPassword";
// import VerifyOTP from "../UI/pages/auth/VerifyOtp";
// import Overview from "../UI/pages/Dashboard/Overview";
// import AuthTemplate from "../UI/templates/AuthTemplate";
// import ResetPassword from "../UI/pages/auth/ResetPassword";
// import DashboardTemplate from "../UI/templates/DashboardTemplete";

// import {
//   attendance,
//   cashForWork,
//   communityWaterManagement,
//   conservationFarming,
//   contourTrench,
//   coordinationPlatform,
//   cooperativeProfile,
//   genderFriendly,
//   waterSourceProtection,
//   droughtResistentCrop,
//   hydrologicalAndMeterologicalStation,
//   icsTrainee,
//   icsMain,
//   mediaMobilization,
//   nrmOperationalPlan,
//   nrmGroupProfile,
//   nrmNetwork,
//   Page,
//   plantation,
//   policyDocument,
//   pondPage,
//   watershedManagementPlan,
//   workshop,
//   setting,
//   staffProfile,
//   createAdmin,
//   coFinancingTracking,
// } from "./routes";

// export const dashboard: Page = {
//   name: "Dashboard",
//   path: "/dashboard",
//   element: <DashboardTemplate />,
//   children: [
//     {
//       name: "",
//       path: "",
//       element: <Overview />,
//     },
//     attendance,
//     workshop,
//     communityWaterManagement,
//     pondPage,
//     watershedManagementPlan,
//     contourTrench,
//     icsMain,
//     icsTrainee,
//     nrmGroupProfile,
//     plantation,
//     nrmNetwork,
//     nrmOperationalPlan,
//     cooperativeProfile,
//     coFinancingTracking,
//     genderFriendly,
//     waterSourceProtection,
//     droughtResistentCrop,
//     cashForWork,
//     policyDocument,
//     conservationFarming,
//     coordinationPlatform,
//     mediaMobilization,
//     hydrologicalAndMeterologicalStation,
//     staffProfile,
//     setting,
//   ],
// };

// export const superAdmin: Page = {
//   name: "Dashboard",
//   path: "/dashboard/super-admin",
//   element: <DashboardTemplate />,
//   children: [
//     {
//       name: "",
//       path: "",
//       element: <Overview />,
//     },
//     createAdmin,
//   ],
// };

// export const settingRoute: Page = setting;

// export const auth: Page = {
//   name: "Auth",
//   path: "/",
//   element: <AuthTemplate />,
//   children: [
//     {
//       name: "Login",
//       path: "",
//       element: <Login />,
//     },
//     {
//       name: "Forget Password",
//       path: "verify-email",
//       element: <ForgetPassword />,
//     },
//     {
//       name: "Verify OTP",
//       path: "verify-otp",
//       element: <VerifyOTP />,
//     },
//     {
//       name: "Reset Password",
//       path: "reset-password",
//       element: <ResetPassword />,
//     },
//   ],
// };

// export const authRoutes = [auth];
// export const routes = [dashboard];
// export const superAdminRoute = [superAdmin];

import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
