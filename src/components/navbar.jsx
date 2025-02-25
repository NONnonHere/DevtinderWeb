import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice"; // Make sure this path matches your actual redux slice location
import axios from "axios"; // Add this import
import profile from "./profile";


export const Navbar = () => { 
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:7777/logout", {}, {
        withCredentials: true
      });
      dispatch(removeUser()); // Still clear the Redux state after successful logout
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  }


  return (
    <div className="navbar bg-slate-900">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
        {user && <p className="text-white ml-4">Welcome, {user.firstName}</p>}
      </div>
      <div className="flex-none gap-2">
           
         <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        (<div className="dropdown dropdown-end">
          
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a> </a></li>
            <li><a onClick={handleLogin}>Login</a></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>)
      </div>
    </div>
  );
};

export default Navbar;