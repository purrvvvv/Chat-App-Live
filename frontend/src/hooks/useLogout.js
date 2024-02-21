import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

const useLogout = () => {
 const [loading, setLoading] = useState(false);
 const {setAuthUser} = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // set headers
      });
      const data = await res.json(); // get response body
      if(data.error){
        throw new Error(data.error)
      }



      //else 
      localStorage.removeItem("chat-user"); // sirf ye hi kaam ka hai baki sab vo hi bakchodi
      setAuthUser(null);
      

      
      // set authUser to null
    } catch (error) {
     toast.error(error.message);
    } finally {
      setLoading(false); 
    }
  };
  return { loading, logout };
 
}
export default useLogout