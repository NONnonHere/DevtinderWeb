
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const dispatch = useDispatch();
export const Login = () => {
  const [emailId, setemailId] = useState("sairajhere@gmail.com");
  const [password, setPassword] = useState("Sairaj@123");

  const handlelogin = async (e) => {
    e.preventDefault(); 
    try{
    const res = await axios.post("http://localhost:7777/login", {
      emailId,
      password
    },
    {
    withCredentials: true
    }
  );
  console.log(res.data);
  dispatch(addUser(res.data));
  }
  
    catch(err){
      console.log(err);
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
      <form>
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
        <div>
          <input
            className="w-full base-100 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
            value="Login"
            onClick={handlelogin}
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