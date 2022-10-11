import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
const useOrganization = () => useContext<any>(AuthContext);

export default useOrganization;
