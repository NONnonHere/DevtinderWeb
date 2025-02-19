import {Navbar} from "./navbar";
import {Outlet} from "react-router";
import {Footer} from "./footer";

export const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
};

export default Body;