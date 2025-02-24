import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [emailId, setemailId] = useState("sairajhere@gmail.com");
  const [password, setPassword] = useState("Sairaj@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post("http://localhost:7777/login", {
        emailId,
        password
      }, {
        withCredentials: true
      });
      
      if (res.status == 200) {
        dispatch(addUser(res.data));
        navigate("/feed");
      } else {
        setError(res.data.message + " Invalid credentials");
      }
    } catch(err) {
      console.log("Error details:", err);
      setError(err.response?.data?.message || "Login failed");
    }
  } 

  return (
    <div className="bg-slate-800     flex h-screen ">
    <div className="w-full max-w-xs m-auto bg-slate-700	 rounded p-5">
      <header>
        <img
          className="w-20 mx-auto mb-5"
          src="https://img.icons8.com/fluent/344/year-of-tiger.png"
        />
      </header>
      <form onSubmit={handlelogin}>
        <div>
          <label className="block mb-2 text-indigo-500" htmlFor="username">
            Email Address :  {emailId}
          </label>
          <input
            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="text"
            name="username"
            value={emailId}
            onChange={(e) => setemailId(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-indigo-500" htmlFor="password">
            Password
          </label>
          <input
            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
         <p className="text-red-500">{error}</p>
        <div>
          <input
            className="w-full base-100 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <footer>
        <a
          className="text-indigo-700 hover:text-pink-700 text-sm float-left"
          href="#"
        >
          Forgot Password?
        </a>
        <a
          className="text-indigo-700 hover:text-pink-700 text-sm float-right"
          href="#"
        >
          Create Account
        </a>
      </footer>
    </div>
  </div>

  );
};

export default Login;