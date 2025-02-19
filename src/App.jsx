
import {Navbar} from "./navbar";
import {BrowserRouter, Routes, Route} from "react-router";
import {Body} from "./body";
import {Login} from "./login";

function App() {
  return( 
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<div>signup</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;