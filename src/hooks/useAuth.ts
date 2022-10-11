import { useContext } from "react";
import { AuthContext } from "./../contexts/Auth";

const useAuth = () => useContext(AuthContext);
export default useAuth;
