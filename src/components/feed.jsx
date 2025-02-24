import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import UserCard from "./userCard";

const Feed = () => {    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const feed = useSelector((store) => store.user.user);

    const getFeed = async () => {
        try {
          const res = await axios.get("http://localhost:7777/feed", {
            withCredentials: true,
          }); 
          console.log(res.data); 
        } catch (error) {
          if(error.response && error.response.status === 401) 
          {
            navigate("/login"); 
          }
          console.error("Error fetching user:", error);
        }

      };

    useEffect(() => {    
        getFeed();
    }, []);

    return (    
        feed && (<div className="flex justify-center my-18">
            <UserCard user={feed} />
        </div>)
    );
};

export default Feed;
