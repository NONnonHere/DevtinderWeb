import {Navbar} from "./navbar";
import {Outlet} from "react-router";
import {Footer} from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Body = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const useData = useSelector((store) => store.user);

  const fetchUser = async () => {
    
    try {
      if(useData.user) return; 
      const res = await axios.get("http://localhost:7777/profile/view", {
        withCredentials: true,
      });
      
      dispatch(addUser(res.data));
    } catch (error) {
      if(error.response && error.response.status === 401) 
      {
        navigate("/login"); 
      }
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);  

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
};

export default Body;