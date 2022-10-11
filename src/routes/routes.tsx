// import { ReactElement } from "react";
// import { AiOutlineReconciliation } from "react-icons/ai";
// import { CgFileDocument, CgProfile, CgToolbox } from "react-icons/cg";
// import { FaHandHoldingWater } from "react-icons/fa";
// import {
//   GiFarmer,
//   GiHole, GiPlatform, GiWaterMill, GiWaterSplash
// } from "react-icons/gi";
// import {
//   MdOutlinePersonPin, MdOutlineRecentActors,
//   MdOutlineWaterDrop
// } from "react-icons/md";
// import {
//   TbBuildingFactory2, TbHeartRateMonitor, TbHelp, TbPlant, TbSettings, TbUserCircle,
//   TbUserPlus
// } from "react-icons/tb";
// import {
//   TiBook, TiDocumentAdd, TiDocumentText, TiGroupOutline
// } from "react-icons/ti";
// import { VscFileSymlinkDirectory, VscNotebook } from "react-icons/vsc";
// import AttendanceContainer from "../UI/pages/attandance";
// import CashForWork from "../UI/pages/CashForWork";
// import CoFinancingTracking from "../UI/pages/CoFinancingTracking";
// import WaterManagement from "../UI/pages/CommunityWaterManagement";
// import ConservationFarming from "../UI/pages/conservationFarming/index";
// import ContourTrench from "../UI/pages/ContourTrench";
// import CooperativeProfile from "../UI/pages/CooperativeProfile";
// import CoordinationPlatformPage from "../UI/pages/coordinationPlatform";
// import DroughtResistentCrop from "../UI/pages/droughtResistentCrop";
// import GenderFriendly from "../UI/pages/GenderFriendly";
// import HydroAndMetroStationPage from "../UI/pages/hydro";
// import Ics from "../UI/pages/ICS";
// import IcsTraineePage from "../UI/pages/icsTrainee";
// import MediaMobilization from "../UI/pages/MediaMobilization";
// import MonitoringVisitRecords from "../UI/pages/MonitoringVisitRecords";
// import NrmGroupProfile from "../UI/pages/nrmGroupProfile";
// import NrmNetwork from "../UI/pages/nrmnetwork";
// import NrmOperationalPlanContainer from "../UI/pages/NrmOperationalPlan";
// import Plantation from "../UI/pages/plantation";
// import PolicyDocumentPage from "../UI/pages/policyDocument";
// import PondContainer from "../UI/pages/Ponds";
// import StaffProfile from "../UI/pages/StaffProfile";
// import AddWatershedManagementContainer from "../UI/pages/WatershedManagementPlans";
// import WaterSourceProtection from "../UI/pages/WaterSourceProtection";
// import WorkshopPage from "../UI/pages/workshop";
// // * create-admin
// import CreateAdmin from "../UI/pages/createAdmin";

// export type Page = {
//   name: string;
//   path: string;
//   element: ReactElement;
//   children?: Page[];
//   icon?: ReactElement;
// };

// export const mediaMobilization: Page = {
//   name: "Media Mobilizations",
//   path: "media-mobilizations",
//   element: <MediaMobilization />,
//   icon: <MdOutlineRecentActors />,
// };

// export const cashForWork: Page = {
//   name: "Cash For Work",
//   path: "cash-for-work",
//   element: <CashForWork />,
//   icon: <MdOutlineRecentActors />,
// };

// export const cooperativeProfile: Page = {
//   name: "Cooperative Profile",
//   path: "cooperative-profile",
//   element: <CooperativeProfile />,
//   icon: <CgProfile />,
// };

// export const genderFriendly: Page = {
//   name: "Agro Tools Distribution",
//   path: "agro-tools-distribution",
//   element: <GenderFriendly />,
//   icon: <CgToolbox />,
// };
// export const waterSourceProtection: Page = {
//   name: "Water Source Protection",
//   path: "water-source-protection",
//   element: <WaterSourceProtection />,
//   icon: <FaHandHoldingWater />,
// };
// export const nrmOperationalPlan: Page = {
//   name: "NRM Operational Plan",
//   path: "nrm-operational-plan",
//   element: <NrmOperationalPlanContainer />,
//   icon: <TiDocumentAdd />,
// };

// export const hydrologicalAndMeterologicalStation = {
//   path: "hydrological-and-meterological-stations",
//   name: "Hydro & Metro Stations",
//   element: <HydroAndMetroStationPage />,
//   icon: <TbBuildingFactory2 />,
// };

// export const coordinationPlatform = {
//   name: "Coordination Platform",
//   path: "coordination-platform",
//   element: <CoordinationPlatformPage />,
//   icon: <GiPlatform />,
// };

// export const policyDocument = {
//   name: "Policy Document",
//   path: "policy-document",
//   element: <PolicyDocumentPage />,
//   icon: <CgFileDocument />,
// };

// export const contourTrench = {
//   name: "Contour Trench",
//   path: "contour-trench",
//   element: <ContourTrench />,
//   icon: <GiHole />,
// };

// export const watershedManagementPlan = {
//   name: "Watershed Management",
//   path: "watershed-management",
//   element: <AddWatershedManagementContainer />,
//   icon: <MdOutlineWaterDrop />,
// };

// export const pondPage: Page = {
//   name: "Ponds",
//   path: "catchment-ponds-water-hole",
//   element: <PondContainer />,
//   icon: <GiWaterSplash />,
// };

// export const communityWaterManagement: Page = {
//   name: "Community Water",
//   path: "community-water",
//   element: <WaterManagement />,
//   icon: <GiWaterMill />,
// };

// export const attendance: Page = {
//   name: "Attendance",
//   path: "attendance",
//   element: <AttendanceContainer />,
//   icon: <AiOutlineReconciliation />,
// };

// export const nrmGroupProfile: Page = {
//   name: "NRM Group Profile",
//   path: "nrm-group-profile",
//   element: <NrmGroupProfile />,
//   icon: <TbUserCircle />,
// };

// export const nrmNetwork: Page = {
//   name: "NRM Network",
//   path: "nrm-network",
//   element: <NrmNetwork />,
//   icon: <TiGroupOutline />,
// };
// export const plantation: Page = {
//   name: "Plantation",
//   path: "plantation",
//   element: <Plantation />,
//   icon: <TbPlant />,
// };

// //* ICS
// export const icsMain: Page = {
//   name: "ICS",
//   path: "improved-cooking-stoves",
//   element: <Ics />,
//   icon: <VscNotebook />,
// };

// // *ICS Trainee
// export const icsTrainee: Page = {
//   name: "ICS Trainee",
//   path: "improved-cooking-stoves-trainee",
//   element: <IcsTraineePage />,
//   icon: <MdOutlinePersonPin />,
// };

// // *CONSERVATION FARMING
// export const conservationFarming: Page = {
//   name: "Conservation Farming",
//   path: "conservation-farming",
//   element: <ConservationFarming />,
//   icon: <GiFarmer />,
// };
// // * DROUGHT RESISTENT CROP
// export const droughtResistentCrop: Page = {
//   name: "Drought Resistent Crop",
//   path: "drought-resistent-crop",
//   element: <DroughtResistentCrop />,
//   icon: <TiDocumentText />,
// };

// export const workshop: Page = {
//   name: "Workshop",
//   path: "workshop",
//   element: <WorkshopPage />,
//   icon: <VscFileSymlinkDirectory />,
// };

// // *SATFF PROFILE

// export const staffProfile: Page = {
//   name: "Staff Profile",
//   path: "staff-profile",
//   element: <StaffProfile />,
//   icon: <CgProfile />,
// };
// // *MONITORING VISIT RECORDS

// export const monitoringVisitRecords: Page = {
//   name: "Monitoring Visit Records ",
//   path: "monitoring-visit-records",
//   element: <MonitoringVisitRecords />,
//   icon: <TbHeartRateMonitor />,
// };

// // *SETTING
// export const setting: Page = {
//   name: "Setting",
//   path: "setting",
//   element: <></>,
//   icon: <TbSettings />,
// };

// // *HELP
// export const help: Page = {
//   name: "Help",
//   path: "help",
//   element: <></>,
//   icon: <TbHelp />,
// };

// // *Co-Financing Tracking
// export const coFinancingTracking: Page = {
//   name: "Co-Financing Tracking",
//   path: "co-financing-tracking",
//   element: <CoFinancingTracking />,
//   icon: <TiBook />,
// };

// // * SUPER ADMIN

// // * create-admin
// export const createAdmin: Page = {
//   name: "Create Admin",
//   path: "create-admin",
//   element: <CreateAdmin />,
//   icon: <TbUserPlus />,
// };
