import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useHook = () => {
    const all = useContext(AuthContext);
    return all;

};

export default useHook;